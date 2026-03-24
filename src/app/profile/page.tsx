import PageHeader from "@/components/PageHeader";
import ProfileForm from "@/components/ProfileForm";
import KYCUpload from "@/components/KYCUpload";
import AuthGuard from "@/components/AuthGuard";

export default function ProfilePage() {
  return (
    <AuthGuard>
      <main className="px-4 sm:px-6 md:px-10 py-6 sm:py-10 space-y-6 sm:space-y-10">
        
        <PageHeader title="Mon profil" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          
          {/* Infos utilisateur */}
          <div className="order-1 lg:order-none">
            <ProfileForm />
          </div>

          {/* KYC */}
          <div className="order-2 lg:order-none">
            <KYCUpload />
          </div>

        </div>

      </main>
    </AuthGuard>
  );
}

