import PageHeader from "@/components/PageHeader";
import ProfileForm from "../../components/ProfileForm";
import KYCUpload from "../../components/KYCUpload";
import AuthGuard from "@/components/AuthGuard";

export default function ProfilePage() {
  return (
    <AuthGuard>
      <main className="px-6 md:px-10 py-10 space-y-10">
        <PageHeader title="Mon profil" />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Infos utilisateur */}
          <ProfileForm />

          {/* KYC */}
          <KYCUpload />
        </div>
      </main>
    </AuthGuard>
  );
}
