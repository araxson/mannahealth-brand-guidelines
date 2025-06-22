export function PersonaCard() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Sarah, Small Business Owner</h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-700 mb-1">Demographics</h4>
              <p className="text-slate-600">Age 35-50, Urban/Suburban, Business Owner/Entrepreneur</p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-700 mb-1">Goals</h4>
              <p className="text-slate-600">Build a professional brand, attract ideal customers, grow sustainably</p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-700 mb-1">Pain Points</h4>
              <p className="text-slate-600">Limited time, budget constraints, lack of design expertise</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h4 className="font-semibold text-slate-900 mb-3">How We Help</h4>
          <p className="text-slate-600 leading-relaxed">
            We provide clear, actionable brand guidelines that Sarah can implement herself or share with freelancers and
            agencies. Our approach is practical, affordable, and designed for real-world application.
          </p>

          <div className="mt-4 p-4 bg-blue-50 rounded">
            <p className="text-sm text-blue-800 font-medium">
              "I need professional branding that doesn't break the bank and actually makes sense for my business."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
