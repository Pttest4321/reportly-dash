import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const GenerateReport = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Report generated successfully!");
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-center items-center">
            <div className="flex justify-between w-full max-w-2xl">
              <div className={`step-item ${step >= 1 ? "active" : ""} ${step > 1 ? "complete" : ""}`}>
                <div className="step">1</div>
                <p className="text-sm mt-2">Technical Details</p>
              </div>
              <div className={`step-item ${step >= 2 ? "active" : ""} ${step > 2 ? "complete" : ""}`}>
                <div className="step">2</div>
                <p className="text-sm mt-2">Findings</p>
              </div>
              <div className={`step-item ${step === 3 ? "active" : ""}`}>
                <div className="step">3</div>
                <p className="text-sm mt-2">Additional Details</p>
              </div>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Report Title</Label>
                    <Input id="title" placeholder="Security Assessment Report" />
                  </div>
                  <div>
                    <Label htmlFor="members">Project Members</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select members" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="john">John Doe</SelectItem>
                        <SelectItem value="jane">Jane Smith</SelectItem>
                        <SelectItem value="bob">Bob Johnson</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dateFrom">Date From</Label>
                      <Input id="dateFrom" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="dateTo">Date To</Label>
                      <Input id="dateTo" type="date" />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="finding">Finding Name</Label>
                    <Input id="finding" placeholder="Search findings..." />
                  </div>
                  <div>
                    <Label htmlFor="riskLevel">Risk Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select risk level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="critical">Critical</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="informative">Informative</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="cvssVector">CVSS Vector</Label>
                    <Input id="cvssVector" placeholder="CVSS:3.1/AV:N/AC:L/PR:N/UI:N..." />
                  </div>
                  <div>
                    <Label htmlFor="cvssScore">CVSS Score</Label>
                    <Input id="cvssScore" type="number" min="0" max="10" step="0.1" placeholder="9.8" />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="summary">Summary</Label>
                    <Textarea id="summary" placeholder="Enter detailed summary..." className="h-32" />
                  </div>
                  <div>
                    <Label htmlFor="recommendations">Recommendations</Label>
                    <Textarea
                      id="recommendations"
                      placeholder="Enter recommendations..."
                      className="h-32"
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  disabled={step === 1}
                >
                  Back
                </Button>
                {step < 3 ? (
                  <Button type="button" onClick={handleNext}>
                    Next
                  </Button>
                ) : (
                  <Button type="submit">Submit Report</Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default GenerateReport;