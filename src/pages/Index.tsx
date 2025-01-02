import { DashboardLayout } from "@/components/DashboardLayout";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        <p className="text-gray-600">Select an option from the sidebar to get started.</p>
      </div>
    </DashboardLayout>
  );
};

export default Index;