import Link from "next/link";

export default function Support() {
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-4">
        <h1 className="text-4xl font-bold">Support</h1>
        <p className="text-lg text-center">
            If you need help, please email{' '}
            <Link
            href="mailto:robert@kochie.io?subject=AFLive%20Support"
            className="text-blue-600 underline"
            >
                robert@kochie.io
                </Link>
        </p>
        </div>
    )}