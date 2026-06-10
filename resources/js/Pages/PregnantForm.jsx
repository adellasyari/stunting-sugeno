import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ChevronLeft, HeartPulse, Droplets, AlertCircle, AlertTriangle } from 'lucide-react';

export default function PregnantForm() {
    const { data, setData, post, processing } = useForm({
        motherAge: '',
        gestationalAge: '',
        height: '',
        lila: '',
        hb: '',
        environment: 'Baik'
    });

    const submit = (e) => {
        e.preventDefault();
        post('/calculate-pregnant');
    };

    return (
        <>
            <Head title="Cek Risiko Kehamilan" />
            <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white font-sans text-slate-800 selection:bg-teal-500 selection:text-white py-12 px-4 sm:px-6">

                {/* Centered Card */}
                <div className="max-w-xl mx-auto mt-12 bg-white rounded-3xl shadow-xl border border-teal-100 p-8 sm:p-10">

                    {/* Header & Navigation */}
                    <div className="mb-10">
                        <Link href="/" className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 mb-8 transition-colors group">
                            <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                            Kembali ke Beranda
                        </Link>

                        <div className="text-center">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                                Cek Risiko Kehamilan
                            </h1>
                            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                                Pantau status gizi ibu hamil untuk mencegah risiko stunting pada janin sejak dini.
                            </p>
                        </div>
                    </div>

                    {/* The Form Fields */}
                    <form onSubmit={submit} className="space-y-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Input 1: Usia Ibu */}
                            <div>
                                <label htmlFor="motherAge" className="block text-sm font-bold text-slate-700 mb-2">Usia Ibu</label>
                                <div className="relative rounded-2xl shadow-sm">
                                    <input
                                        type="number"
                                        id="motherAge"
                                        name="motherAge"
                                        min="0"
                                        className="block w-full rounded-2xl border-slate-200 pl-4 pr-16 py-3.5 text-slate-900 focus:border-teal-500 focus:ring-teal-500 sm:text-sm transition-colors font-medium bg-slate-50 hover:bg-white focus:bg-white"
                                        placeholder="Contoh: 24"
                                        value={data.motherAge}
                                        onChange={(e) => setData('motherAge', e.target.value)}
                                        required
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                        <span className="text-slate-400 font-medium sm:text-sm">Tahun</span>
                                    </div>
                                </div>
                                <p className="mt-2 text-xs text-slate-500 font-medium">Contoh: 24</p>
                            </div>

                            {/* Input 2: Usia Kehamilan */}
                            <div>
                                <label htmlFor="gestationalAge" className="block text-sm font-bold text-slate-700 mb-2">Usia Kehamilan</label>
                                <div className="relative rounded-2xl shadow-sm">
                                    <input
                                        type="number"
                                        id="gestationalAge"
                                        name="gestationalAge"
                                        min="0"
                                        max="10"
                                        className="block w-full rounded-2xl border-slate-200 pl-4 pr-16 py-3.5 text-slate-900 focus:border-teal-500 focus:ring-teal-500 sm:text-sm transition-colors font-medium bg-slate-50 hover:bg-white focus:bg-white"
                                        placeholder="Contoh: 6"
                                        value={data.gestationalAge}
                                        onChange={(e) => setData('gestationalAge', e.target.value)}
                                        required
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                        <span className="text-slate-400 font-medium sm:text-sm">Bulan</span>
                                    </div>
                                </div>
                                <p className="mt-2 text-xs text-slate-500 font-medium">Contoh: 6</p>
                            </div>

                            {/* Input 3: Tinggi Badan Ibu */}
                            <div>
                                <label htmlFor="height" className="block text-sm font-bold text-slate-700 mb-2">Tinggi Badan Ibu</label>
                                <div className="relative rounded-2xl shadow-sm">
                                    <input
                                        type="number"
                                        id="height"
                                        name="height"
                                        step="0.1"
                                        className="block w-full rounded-2xl border-slate-200 pl-4 pr-12 py-3.5 text-slate-900 focus:border-teal-500 focus:ring-teal-500 sm:text-sm transition-colors font-medium bg-slate-50 hover:bg-white focus:bg-white"
                                        placeholder="Contoh: 155"
                                        value={data.height}
                                        onChange={(e) => setData('height', e.target.value)}
                                        required
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                        <span className="text-slate-400 font-medium sm:text-sm">cm</span>
                                    </div>
                                </div>
                                <p className="mt-2 text-xs text-slate-500 font-medium">Contoh: 155 (Batas &lt; 145 cm)</p>
                            </div>

                            {/* Input 4: Lingkar Lengan Atas (LILA) */}
                            <div>
                                <label htmlFor="lila" className="block text-sm font-bold text-slate-700 mb-2">Lingkar Lengan Atas (LILA)</label>
                                <div className="relative rounded-2xl shadow-sm">
                                    <input
                                        type="number"
                                        id="lila"
                                        name="lila"
                                        step="0.1"
                                        className="block w-full rounded-2xl border-slate-200 pl-4 pr-12 py-3.5 text-slate-900 focus:border-teal-500 focus:ring-teal-500 sm:text-sm transition-colors font-medium bg-slate-50 hover:bg-white focus:bg-white"
                                        placeholder="Contoh: 24.5"
                                        value={data.lila}
                                        onChange={(e) => setData('lila', e.target.value)}
                                        required
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                        <span className="text-slate-400 font-medium sm:text-sm">cm</span>
                                    </div>
                                </div>
                                <p className="mt-2 text-xs text-slate-500 font-medium">Contoh: 24.5 (Batas KEK &lt; 23.5 cm)</p>
                            </div>
                        </div>

                        {/* Full-Width Section: Kadar Hemoglobin (Hb) */}
                        <div className="mb-8">
                            <label htmlFor="hb" className="block text-sm font-bold text-slate-700 mb-2">Kadar Hemoglobin (Hb)</label>
                            <div className="relative rounded-2xl shadow-sm">
                                <input
                                    type="number"
                                    id="hb"
                                    name="hb"
                                    step="0.1"
                                    className="block w-full rounded-2xl border-slate-200 pl-4 pr-16 py-3.5 text-slate-900 focus:border-teal-500 focus:ring-teal-500 sm:text-sm transition-colors font-medium bg-slate-50 hover:bg-white focus:bg-white"
                                    placeholder="Contoh: 11.5"
                                    value={data.hb}
                                    onChange={(e) => setData('hb', e.target.value)}
                                    required
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                    <span className="text-slate-400 font-medium sm:text-sm">g/dL</span>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-slate-500 font-medium">Contoh penulisan: 11.5. (Batas normal ibu hamil &ge; 11.0 g/dL)</p>
                        </div>

                        {/* Kondisi Lingkungan */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">
                                Kondisi Lingkungan & Sanitasi
                            </label>
                            <p className="text-xs text-slate-500 font-medium mb-3 leading-relaxed">
                                Berdasarkan akses <strong>air bersih</strong>, <strong>jamban</strong>, dan{' '}
                                <strong>tempat pembuangan sampah/limbah</strong> di rumah atau lingkungan terdekat.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Card 1: Baik */}
                                <button
                                    type="button"
                                    onClick={() => setData('environment', 'Baik')}
                                    className={`relative flex flex-col items-start p-4 rounded-2xl border-2 transition-all duration-200 text-left ${data.environment === 'Baik'
                                            ? 'border-teal-500 bg-teal-50 ring-1 ring-teal-500 shadow-md shadow-teal-500/10'
                                            : 'border-slate-100 bg-white hover:border-teal-200 hover:bg-teal-50/50'
                                        }`}
                                >
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Droplets className={`w-5 h-5 ${data.environment === 'Baik' ? 'text-teal-600' : 'text-teal-500'}`} />
                                        <span className={`font-bold ${data.environment === 'Baik' ? 'text-teal-800' : 'text-slate-700'}`}>Baik</span>
                                    </div>
                                    <span className="text-xs text-slate-500 leading-tight">Semua fasilitas sanitasi (air bersih, jamban, tempat pembuangan) dapat diakses dengan mudah</span>
                                </button>

                                {/* Card 2: Cukup */}
                                <button
                                    type="button"
                                    onClick={() => setData('environment', 'Cukup')}
                                    className={`relative flex flex-col items-start p-4 rounded-2xl border-2 transition-all duration-200 text-left ${data.environment === 'Cukup'
                                            ? 'border-teal-500 bg-teal-50 ring-1 ring-teal-500 shadow-md shadow-teal-500/10'
                                            : 'border-slate-100 bg-white hover:border-teal-200 hover:bg-teal-50/50'
                                        }`}
                                >
                                    <div className="flex items-center space-x-2 mb-2">
                                        <AlertCircle className={`w-5 h-5 ${data.environment === 'Cukup' ? 'text-teal-600' : 'text-orange-500'}`} />
                                        <span className={`font-bold ${data.environment === 'Cukup' ? 'text-teal-800' : 'text-slate-700'}`}>Cukup</span>
                                    </div>
                                    <span className="text-xs text-slate-500 leading-tight">Beberapa fasilitas sanitasi sudah dapat diakses</span>
                                </button>

                                {/* Card 3: Kurang */}
                                <button
                                    type="button"
                                    onClick={() => setData('environment', 'Kurang')}
                                    className={`relative flex flex-col items-start p-4 rounded-2xl border-2 transition-all duration-200 text-left ${data.environment === 'Kurang'
                                            ? 'border-teal-500 bg-teal-50 ring-1 ring-teal-500 shadow-md shadow-teal-500/10'
                                            : 'border-slate-100 bg-white hover:border-teal-200 hover:bg-teal-50/50'
                                        }`}
                                >
                                    <div className="flex items-center space-x-2 mb-2">
                                        <AlertTriangle className={`w-5 h-5 ${data.environment === 'Kurang' ? 'text-teal-600' : 'text-red-500'}`} />
                                        <span className={`font-bold ${data.environment === 'Kurang' ? 'text-teal-800' : 'text-slate-700'}`}>Kurang</span>
                                    </div>
                                    <span className="text-xs text-slate-500 leading-tight">Tidak ada fasilitas sanitasi sama sekali</span>
                                </button>
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full flex items-center justify-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg py-4 px-8 rounded-2xl shadow-lg shadow-teal-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-50"
                            >
                                <HeartPulse className="w-6 h-6" />
                                <span>{processing ? 'Menganalisis...' : 'Analisis Risiko Ibu Hamil'}</span>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}
