import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Box } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      title: "Basic Trader",
      price: "$50",
      period: "one-time",
      description: "Perfect for beginners starting their crypto journey",
      features: [
        "Basic spot trading",
        "Market & limit orders",
        "Basic market analysis",
        "Email support",
      ],
      button: "Start Trading",
      highlight: false,
    },
    {
      title: "Pro Trader",
      price: "$29",
      period: "one-month",
      description: "Advanced features for serious traders",
      features: [
        "Advanced trading tools",
        "Margin trading up to 10x",
        "Advanced technical analysis",
        "Priority support",
        "API access",
      ],
      button: "Start Trading",
      highlight: true,
      badge: "Most Popular",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl">Choose the plan that suit your needs</h1>
      <h4>Pick a plan and get started instantly.</h4>
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row gap-6 ">
          {plans.map((plan, idx) => (
            <div
              key={plan.title}
              className={`relative flex flex-col justify-between rounded-2xl border  ${
                plan.highlight ? "border-cyan-700" : "border-neutral-800"
              } bg-gradient-to-r from bg-cyan-600 to-gray-100 p-8 w-80 shadow-lg`}
            >
              {plan.badge && (
                <span className="absolute top-4 left-4 bg-cyan-700 text-xs text-white px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
              <div>
                <h2 className="text-white text-xl font-semibold mb-2">
                  {plan.title}
                </h2>
                <div className="flex items-end mb-2">
                  <span className="text-3xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <ul className="mb-8 space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-green-400"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full bg-cyan-700 text-white py-3 rounded-full font-semibold hover:bg-cyan-400 transition">
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
