import { Head, Link } from '@inertiajs/react';
import { Baby, Shield } from 'lucide-react';

export default function Welcome() {
    return (
        <>
            <Head title="CegahStunting - Deteksi Risiko Stunting" />
            <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-white font-sans text-slate-800 selection:bg-teal-500 selection:text-white flex flex-col">
                {/* Navbar */}
                <nav className="w-full pt-6 pb-4">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <Shield className="w-8 h-8 text-teal-500" />
                                <span className="text-2xl font-bold text-teal-500 tracking-tight">CegahStunting</span>
                            </div>
                            {/* The right side is intentionally left empty */}
                        </div>
                    </div>
                </nav>

                {/* Main Content (Centered Layout) */}
                <main className="flex-grow max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col items-center">
                    
                    {/* Hero Section */}
                    <div className="max-w-3xl mx-auto text-center mt-16 sm:mt-20">
                        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                            Pantau Tumbuh Kembang <br className="hidden sm:block" /> Anak & Kehamilan Anda
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-500 leading-relaxed">
                            Sistem cerdas berbasis web untuk mendeteksi dini risiko stunting menggunakan kalkulasi standar kesehatan WHO. Cepat, mudah, dan tanpa pendaftaran.
                        </p>
                    </div>

                    {/* Action Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 sm:mt-16 max-w-4xl mx-auto w-full mb-20">
                        
                        {/* Card 1 (Anak) */}
                        <div className="bg-white rounded-3xl p-10 border border-teal-100 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mb-6 text-teal-500">
                                <Baby className="w-10 h-10" strokeWidth={2} />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">Cek Risiko Anak/Balita</h2>
                            <p className="text-slate-500 mb-8 leading-relaxed flex-grow text-base sm:text-lg">
                                Evaluasi status gizi anak berdasarkan usia, tinggi, dan berat badan.
                            </p>
                            <Link href="/cek-anak" className="w-full inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg py-4 px-8 rounded-full shadow-md shadow-teal-500/20 transition-colors duration-200">
                                Mulai Cek Anak
                            </Link>
                        </div>

                        {/* Card 2 (Ibu Hamil) */}
                        <div className="bg-white rounded-3xl p-10 border border-teal-100 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mb-6 text-teal-500">
                                {/* Custom SVG for pregnant woman */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                                    <path d="M13.6 8c-1.5-.4-3.1-.4-4.5 0-1.8.5-3.1 2.2-3.1 4v3" />
                                    <path d="M16 11.5a5.5 5.5 0 0 1-8.3 4.8" />
                                    <path d="M11 16v6" />
                                    <path d="M11 22h-3" />
                                    <path d="M15 22h-3" />
                                    <path d="M13.5 16.5v5.5" />
                                </svg>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">Cek Risiko Ibu Hamil</h2>
                            <p className="text-slate-500 mb-8 leading-relaxed flex-grow text-base sm:text-lg">
                                Pantau potensi risiko berdasarkan usia kandungan dan ukuran LILA.
                            </p>
                            <Link href="/cek-ibu-hamil" className="w-full inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg py-4 px-8 rounded-full shadow-md shadow-teal-500/20 transition-colors duration-200">
                                Mulai Cek Ibu Hamil
                            </Link>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="w-full py-8 text-center mt-auto">
                    <p className="text-sm font-medium text-teal-600/60">
                        Didedikasikan untuk kesehatan generasi masa depan Indonesia.
                    </p>
                </footer>
            </div>
        </>
    );
}
