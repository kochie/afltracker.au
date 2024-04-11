import Link from "next/link";

export default function Privacy() {

    return (
        <PrivacyPolicy />
    )
}


const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-4">Privacy Policy for AFL Tracker</h1>
      <p className="mb-2"><strong>Effective Date:</strong> Thursday 11th April 2024</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">1. Introduction</h2>
      <p className="mb-4">Welcome to AFL Tracker. We are committed to protecting your privacy. This Privacy Policy outlines the types of information we do not collect from you, as well as the information that we do collect, and how it is used.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">2. Information We Do Not Collect</h2>
      <p className="mb-4">AFL Tracker does not collect any personal data from its users. We do not require or store any information that can be used to personally identify you, such as your name, email address, or location.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">3. Information We Collect</h2>
      <p className="mb-4">While we do not collect personal information, AFL Tracker utilizes Sentry.io to collect and analyze crash reports. This information is strictly limited to crash analytics and does not include any personal user data. The data collected includes:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Device type and operating system</li>
        <li>App version</li>
        <li>Time of the crash</li>
        <li>Conditions under which the crash occurred</li>
      </ul>
      <p>This data is used solely to monitor the performance of AFL Tracker and to improve app stability and user experience.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">4. Use of Collected Information</h2>
      <p className="mb-4">The crash analytics data collected through Sentry.io is used for the following purposes:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Identifying and fixing bugs</li>
        <li>Enhancing the app's performance and reliability</li>
        <li>Ensuring compatibility with various devices and operating systems</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">5. Data Security</h2>
      <p className="mb-4">We take the security of the data we collect seriously. Only authorized personnel have access to this data, and it is protected using industry-standard security measures.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">6. Changes to This Privacy Policy</h2>
      <p className="mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically to stay informed about how we are protecting the information we collect.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">7. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at <Link className="underline" href="mailto:robert@kochie.io?subject=aflive%20support">robert@kochie.io</Link>.</p>

      <p className="mt-4">By using AFL Tracker, you consent to the practices described in this Privacy Policy.</p>
    </div>
  );
}
