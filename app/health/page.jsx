import PageContainer from '../components/PageContainer';

export default function HealthPage() {
  return (
    <PageContainer
      title="AI Study Planner Health Check"
      description="The application is running successfully."
    >
      <p className="mt-6 font-semibold text-green-600">
        Status: OK
      </p>
    </PageContainer>
  );
}