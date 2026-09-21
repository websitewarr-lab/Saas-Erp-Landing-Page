"use client";

import React from "react";
import { UserCheck, Clock, CalendarCheck, CreditCard, ShieldCheck } from "lucide-react";

export default function HrmsScenes({ stepId }: { stepId: string }) {
  if (stepId === "directory") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Employee 360° Digital Profile</h4>
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2 flex-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
              RK
            </div>
            <div>
              <span className="font-extrabold text-slate-900 text-sm block">Rajesh Kumar</span>
              <span className="text-[11px] text-slate-500">EMP ID: EMP-2026-041 • Sr. Sales Manager</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-600">Department: Sales & Enterprise Accounts • Joining Date: Jan 15, 2022</p>
        </div>
      </div>
    );
  }

  if (stepId === "attendance") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Biometric Shift Roster & Punch Log</h4>
          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">PRESENT (09:02 AM)</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs text-center flex-1">
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-500 font-bold block">In Time</span>
            <span className="font-mono font-bold text-slate-900">09:02 AM</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-500 font-bold block">Out Time</span>
            <span className="font-mono font-bold text-slate-900">06:05 PM</span>
          </div>
          <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200">
            <span className="text-[10px] text-emerald-700 font-bold block">Total Hours</span>
            <span className="font-mono font-bold text-emerald-900">09h 03m</span>
          </div>
        </div>
      </div>
    );
  }

  if (stepId === "leave") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Leave Request & Manager Approval Flow</h4>
        <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-xs space-y-1.5 flex-1">
          <div className="flex items-center justify-between font-bold text-blue-900">
            <span>Casual Leave Application (2 Days)</span>
            <span className="bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded font-extrabold">APPROVED BY VP</span>
          </div>
          <p className="text-[11px] text-blue-700">Dates: Oct 18 - Oct 19, 2026 • Balance Remaining: 14 Days PTO</p>
        </div>
      </div>
    );
  }

  if (stepId === "payroll") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">1-Click Automated Payroll Payslip Preview</h4>
          <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">PAYROLL CLEARED</span>
        </div>
        <div className="p-3 bg-slate-900 text-white rounded-xl space-y-2 text-xs flex-1">
          <div className="flex items-center justify-between font-mono">
            <span>Gross Salary: ₹1,20,000</span>
            <span className="text-emerald-400 font-bold">Deductions: ₹21,500</span>
          </div>
          <div className="flex items-center justify-between font-mono border-t border-slate-800 pt-1.5 font-bold">
            <span>Net Bank Transfer</span>
            <span className="text-emerald-400 text-sm">₹98,500</span>
          </div>
        </div>
      </div>
    );
  }

  // stepId === "expenses"
  return (
    <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
      <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Employee Expense OCR Claims & Asset Assignment</h4>
      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5 flex-1">
        <div className="flex items-center justify-between font-bold text-slate-900">
          <span>Client Travel Expense Claim #EXP-4412</span>
          <span className="text-emerald-700 font-mono">₹4,850 Verified</span>
        </div>
        <p className="text-[11px] text-slate-600">Assigned Laptop: MacBook Pro M3 (Asset Tag: AST-9912)</p>
      </div>
    </div>
  );
}

