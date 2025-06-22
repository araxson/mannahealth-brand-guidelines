"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, Plus, Download, Upload, Save, Check } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const STORAGE_KEY = "sectionsTaskListChecked"
const SECTIONS_STORAGE_KEY = "sectionsTaskListSections"
const AUTOSAVE_DELAY = 500 // milliseconds

interface TaskListState {
  sections: string[]
  checked: boolean[]
  lastSaved: number
  isSaving: boolean
}

export function SectionsTaskList() {
  const [state, setState] = React.useState<TaskListState>(() => {
    if (typeof window !== "undefined") {
      const savedSections = localStorage.getItem(SECTIONS_STORAGE_KEY)
      const savedChecked = localStorage.getItem(STORAGE_KEY)
      
      const sections = savedSections ? JSON.parse(savedSections) : [
        "Introduction & Purpose",

      ]
      
      const checked = savedChecked ? JSON.parse(savedChecked) : Array(sections.length).fill(false)
      
      return {
        sections,
        checked,
        lastSaved: Date.now(),
        isSaving: false
      }
    }
    
    return {
      sections: [
        "Introduction & Purpose",

      ],
      checked: Array(16).fill(false),
      lastSaved: Date.now(),
      isSaving: false
    }
  })

  const [saveTimeout, setSaveTimeout] = React.useState<NodeJS.Timeout | null>(null)

  // Debounced auto-save function
  const debouncedSave = React.useCallback((newState: Partial<TaskListState>) => {
    setState(prev => ({ ...prev, ...newState, isSaving: true }))
    
    if (saveTimeout) {
      clearTimeout(saveTimeout)
    }
    
    const timeout = setTimeout(() => {
      if (typeof window !== "undefined") {
        const currentState = { ...state, ...newState }
        localStorage.setItem(SECTIONS_STORAGE_KEY, JSON.stringify(currentState.sections))
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState.checked))
        
        setState(prev => ({ 
          ...prev, 
          lastSaved: Date.now(), 
          isSaving: false 
        }))
      }
    }, AUTOSAVE_DELAY)
    
    setSaveTimeout(timeout)
  }, [saveTimeout, state])

  // Clean up timeout on unmount
  React.useEffect(() => {
    return () => {
      if (saveTimeout) {
        clearTimeout(saveTimeout)
      }
    }
  }, [saveTimeout])

  const handleCheck = (idx: number) => {
    const newChecked = [...state.checked]
    newChecked[idx] = !newChecked[idx]
    debouncedSave({ checked: newChecked })
  }

  const handleEdit = (idx: number, value: string) => {
    const newSections = [...state.sections]
    newSections[idx] = value
    debouncedSave({ sections: newSections })
  }

  const handleAddTask = () => {
    const newSections = [...state.sections, "New Task"]
    const newChecked = [...state.checked, false]
    debouncedSave({ sections: newSections, checked: newChecked })
  }

  const handleRemoveTask = (idx: number) => {
    const newSections = state.sections.filter((_, i) => i !== idx)
    const newChecked = state.checked.filter((_, i) => i !== idx)
    debouncedSave({ sections: newSections, checked: newChecked })
  }

  const handleExport = () => {
    const data = {
      sections: state.sections,
      checked: state.checked,
      exportDate: new Date().toISOString()
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `brand-guidelines-tasks-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string)
        if (data.sections && data.checked) {
          setState(prev => ({
            ...prev,
            sections: data.sections,
            checked: data.checked
          }))
          
          // Save immediately
          if (typeof window !== "undefined") {
            localStorage.setItem(SECTIONS_STORAGE_KEY, JSON.stringify(data.sections))
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data.checked))
          }
        }
      } catch (error) {
        console.error('Error importing tasks:', error)
      }
    }
    reader.readAsText(file)
    
    // Reset input
    event.target.value = ''
  }

  const completedTasks = state.checked.filter(Boolean).length
  const totalTasks = state.sections.length
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  return (
    <div className="min-h-screen bg-white p-12 print:break-after-page mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-4xl font-bold text-slate-900">Sections Task List</h2>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              {state.isSaving ? (
                <div className="flex items-center gap-1">
                  <Save className="w-4 h-4 animate-pulse" />
                  <span>Saving...</span>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Saved</span>
                </div>
              )}
            </div>
          </div>
          <div className="w-16 h-1 bg-amber-400 mb-6"></div>
          
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
              <span>Progress: {completedTasks}/{totalTasks} tasks completed</span>
              <span>{completionPercentage}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div 
                className="bg-amber-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Button onClick={handleAddTask} size="sm" variant="outline">
              <Plus className="w-4 h-4 mr-1" />
              Add Task
            </Button>
            <Button onClick={handleExport} size="sm" variant="outline">
              <Download className="w-4 h-4 mr-1" />
              Export
            </Button>
            <div className="relative">
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="import-file"
              />
              <Button size="sm" variant="outline" asChild>
                <label htmlFor="import-file" className="cursor-pointer">
                  <Upload className="w-4 h-4 mr-1" />
                  Import
                </label>
              </Button>
            </div>
          </div>

          {completionPercentage === 100 && (
            <Alert className="mb-6 border-green-200 bg-green-50">
              <Check className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                🎉 Congratulations! You've completed all tasks in your brand guidelines!
              </AlertDescription>
            </Alert>
          )}
        </div>

        <ul className="space-y-3">
          {state.sections.map((section, idx) => (
            <li key={idx} className="group flex items-center border border-slate-200 rounded-lg p-3 hover:bg-slate-50 transition-colors">
              <span className="w-8 text-right text-slate-500 font-semibold mr-3 flex-shrink-0">{idx + 1}.</span>
              <input
                type="checkbox"
                className="mr-4 w-5 h-5 accent-amber-500 flex-shrink-0"
                checked={state.checked[idx]}
                onChange={() => handleCheck(idx)}
              />
              <Input
                type="text"
                className="text-lg text-slate-900 bg-transparent border-none focus:ring-0 focus:outline-none flex-1 p-0 h-auto"
                value={section}
                onChange={e => handleEdit(idx, e.target.value)}
                placeholder="Enter task description..."
              />
              <Button
                onClick={() => handleRemoveTask(idx)}
                size="sm"
                variant="ghost"
                className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-700 hover:bg-red-50 flex-shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-xs text-slate-500 text-center">
          Last saved: {new Date(state.lastSaved).toLocaleString()} • Auto-saves every change
        </div>
      </div>
    </div>
  )
}
