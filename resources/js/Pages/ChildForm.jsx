import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ChevronLeft, Calculator, Baby, CheckCircle, AlertCircle, AlertTriangle } from 'lucide-react';

export default function ChildForm() {
    const { data, setData, post, processing } = useForm({
        gender: 'Laki-laki',
        age: '',
        height: '',
        weight: '',
        environment: 'Baik'
    });

    const submit = (e) => {
        e.preventDefault();
        post('/calculate-child');
    };

    return (
        <>
            <Head title="Cek Risiko Stunting Anak" />
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
                                Cek Tumbuh Kembang Anak
                            </h1>
                            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                                Masukkan data balita (usia 0-59 bulan) dengan akurat untuk hasil evaluasi yang maksimal.
                            </p>
                        </div>
                    </div>

                    {/* The Form Fields */}
                    <form onSubmit={submit} className="space-y-8">
                        
                        {/* Input 1: Jenis Kelamin */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-3">Jenis Kelamin</label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setData('gender', 'Laki-laki')}
                                    className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-200 ${
                                        data.gender === 'Laki-laki' 
                                        ? 'border-teal-500 bg-teal-50 text-teal-700 shadow-md shadow-teal-500/10' 
                                        : 'border-slate-100 bg-white text-slate-500 hover:border-teal-200 hover:bg-teal-50/50'
                                    }`}
                                >
                                    <Baby className={`w-8 h-8 mb-2 ${data.gender === 'Laki-laki' ? 'text-teal-500' : 'text-slate-400'}`} />
                                    <span className="font-semibold text-sm">Laki-laki</span>
                                    {data.gender === 'Laki-laki' && (
                                        <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-teal-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(20,184,166,0.8)]"></div>
                                    )}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setData('gender', 'Perempuan')}
                                    className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-200 ${
                                        data.gender === 'Perempuan' 
                                        ? 'border-pink-500 bg-pink-50 text-pink-700 shadow-md shadow-pink-500/10' 
                                        : 'border-slate-100 bg-white text-slate-500 hover:border-pink-200 hover:bg-pink-50/50'
                                    }`}
                                >
                                    <Baby className={`w-8 h-8 mb-2 ${data.gender === 'Perempuan' ? 'text-pink-500' : 'text-slate-400'}`} />
                                    <span className="font-semibold text-sm">Perempuan</span>
                                    {data.gender === 'Perempuan' && (
                                        <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-pink-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(236,72,153,0.8)]"></div>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Input 2: Usia Anak */}
                            <div className="sm:col-span-2">
                                <label htmlFor="age" className="block text-sm font-bold text-slate-700 mb-2">Usia Anak</label>
                                <div className="relative rounded-2xl shadow-sm">
                                    <input
                                        type="number"
                                        id="age"
                                        name="age"
                                        min="0"
                                        max="59"
                                        className="block w-full rounded-2xl border-slate-200 pl-4 pr-16 py-3.5 text-slate-900 focus:border-teal-500 focus:ring-teal-500 sm:text-sm transition-colors font-medium bg-slate-50 hover:bg-white focus:bg-white"
                                        placeholder="Contoh: 24"
                                        value={data.age}
                                        onChange={(e) => setData('age', e.target.value)}
                                        required
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                        <span className="text-slate-400 font-medium sm:text-sm">Bulan</span>
                                    </div>
                                </div>
                                <p className="mt-2 text-xs text-slate-500 font-medium">0 - 59 bulan</p>
                            </div>

                            {/* Input 3: Tinggi/Panjang Badan */}
                            <div>
                                <label htmlFor="height" className="block text-sm font-bold text-slate-700 mb-2">Tinggi/Panjang Badan</label>
                                <div className="relative rounded-2xl shadow-sm">
                                    <input
                                        type="number"
                                        id="height"
                                        name="height"
                                        step="0.1"
                                        className="block w-full rounded-2xl border-slate-200 pl-4 pr-12 py-3.5 text-slate-900 focus:border-teal-500 focus:ring-teal-500 sm:text-sm transition-colors font-medium bg-slate-50 hover:bg-white focus:bg-white"
                                        placeholder="80.5"
                                        value={data.height}
                                        onChange={(e) => setData('height', e.target.value)}
                                        required
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                        <span className="text-slate-400 font-medium sm:text-sm">cm</span>
                                    </div>
                                </div>
                            </div>

                            {/* Input 4: Berat Badan */}
                            <div>
                                <label htmlFor="weight" className="block text-sm font-bold text-slate-700 mb-2">Berat Badan</label>
                                <div className="relative rounded-2xl shadow-sm">
                                    <input
                                        type="number"
                                        id="weight"
                                        name="weight"
                                        step="0.1"
                                        className="block w-full rounded-2xl border-slate-200 pl-4 pr-12 py-3.5 text-slate-900 focus:border-teal-500 focus:ring-teal-500 sm:text-sm transition-colors font-medium bg-slate-50 hover:bg-white focus:bg-white"
                                        placeholder="10.2"
                                        value={data.weight}
                                        onChange={(e) => setData('weight', e.target.value)}
                                        required
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                        <span className="text-slate-400 font-medium sm:text-sm">kg</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Input 5: Kondisi Lingkungan */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-3">Kondisi Lingkungan & Sanitasi</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Card 1: Baik */}
                                <button
                                    type="button"
                                    onClick={() => setData('environment', 'Baik')}
                                    className={`relative flex flex-col items-start p-4 rounded-2xl border-2 transition-all duration-200 text-left ${
                                        data.environment === 'Baik' 
                                        ? 'border-teal-500 bg-teal-50 ring-1 ring-teal-500 shadow-md shadow-teal-500/10' 
                                        : 'border-slate-100 bg-white hover:border-teal-200 hover:bg-teal-50/50'
                                    }`}
                                >
                                    <div className="flex items-center space-x-2 mb-2">
                                        <CheckCircle className={`w-5 h-5 ${data.environment === 'Baik' ? 'text-teal-600' : 'text-teal-500'}`} />
                                        <span className={`font-bold ${data.environment === 'Baik' ? 'text-teal-800' : 'text-slate-700'}`}>Baik</span>
                                    </div>
                                    <span className="text-xs text-slate-500 leading-tight">Akses air bersih & jamban sehat</span>
                                </button>

                                {/* Card 2: Cukup */}
                                <button
                                    type="button"
                                    onClick={() => setData('environment', 'Cukup')}
                                    className={`relative flex flex-col items-start p-4 rounded-2xl border-2 transition-all duration-200 text-left ${
                                        data.environment === 'Cukup' 
                                        ? 'border-teal-500 bg-teal-50 ring-1 ring-teal-500 shadow-md shadow-teal-500/10' 
                                        : 'border-slate-100 bg-white hover:border-teal-200 hover:bg-teal-50/50'
                                    }`}
                                >
                                    <div className="flex items-center space-x-2 mb-2">
                                        <AlertCircle className={`w-5 h-5 ${data.environment === 'Cukup' ? 'text-teal-600' : 'text-orange-500'}`} />
                                        <span className={`font-bold ${data.environment === 'Cukup' ? 'text-teal-800' : 'text-slate-700'}`}>Cukup</span>
                                    </div>
                                    <span className="text-xs text-slate-500 leading-tight">Fasilitas dasar terbatas</span>
                                </button>

                                {/* Card 3: Kurang */}
                                <button
                                    type="button"
                                    onClick={() => setData('environment', 'Kurang')}
                                    className={`relative flex flex-col items-start p-4 rounded-2xl border-2 transition-all duration-200 text-left ${
                                        data.environment === 'Kurang' 
                                        ? 'border-teal-500 bg-teal-50 ring-1 ring-teal-500 shadow-md shadow-teal-500/10' 
                                        : 'border-slate-100 bg-white hover:border-teal-200 hover:bg-teal-50/50'
                                    }`}
                                >
                                    <div className="flex items-center space-x-2 mb-2">
                                        <AlertTriangle className={`w-5 h-5 ${data.environment === 'Kurang' ? 'text-teal-600' : 'text-red-500'}`} />
                                        <span className={`font-bold ${data.environment === 'Kurang' ? 'text-teal-800' : 'text-slate-700'}`}>Kurang</span>
                                    </div>
                                    <span className="text-xs text-slate-500 leading-tight">Sanitasi di bawah standar</span>
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
                                <Calculator className="w-6 h-6" />
                                <span>{processing ? 'Menghitung...' : 'Hitung Risiko Stunting'}</span>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}
