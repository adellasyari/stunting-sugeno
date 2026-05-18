import React, { useRef, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { ChevronLeft, AlertTriangle, AlertOctagon, CheckCircle, Info, Stethoscope, Download, Home, Image as ImageIcon } from 'lucide-react';
import html2canvas from 'html2canvas';

export default function Result({ tipe, skor, status, inputData }) {
    const cardRef = useRef(null);
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownloadImage = async () => {
        if (!cardRef.current) return;
        setIsDownloading(true);
        try {
            const canvas = await html2canvas(cardRef.current, { scale: 2, useCORS: true });
            const dataUrl = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = 'hasil-analisis-stunting.png';
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error('Error capturing image:', error);
        } finally {
            setIsDownloading(false);
        }
    };
    // Dynamic styling based on status
    const getStatusStyle = () => {
        if (status === 'Bahaya') return 'bg-red-100 text-red-700 ring-1 ring-red-500';
        if (status === 'Waspada') return 'bg-amber-100 text-amber-700 ring-1 ring-amber-500';
        return 'bg-green-100 text-green-700 ring-1 ring-green-500';
    };

    const getStatusIcon = () => {
        if (status === 'Bahaya') return <AlertOctagon className="w-5 h-5" />;
        if (status === 'Waspada') return <AlertTriangle className="w-5 h-5" />;
        return <CheckCircle className="w-5 h-5" />;
    };

    const getGaugeColor = () => {
        if (status === 'Bahaya') return 'text-red-500';
        if (status === 'Waspada') return 'text-amber-500';
        return 'text-green-500';
    };

    const getRecommendationStyle = () => {
        if (status === 'Bahaya') return 'bg-red-50 border-red-200 text-red-800';
        if (status === 'Waspada') return 'bg-amber-50 border-amber-200 text-amber-800';
        return 'bg-green-50 border-green-200 text-green-800';
    };

    const getRecommendationIconColor = () => {
        if (status === 'Bahaya') return 'text-red-600';
        if (status === 'Waspada') return 'text-amber-600';
        return 'text-green-600';
    };

    const getRecommendationText = () => {
        if (tipe === 'ibu_hamil') {
            if (status === 'Aman') {
                return "Status gizi dan kondisi kehamilan sangat baik. Pertahankan asupan nutrisi seimbang, rutin konsumsi tablet tambah darah (Fe), dan lakukan pemeriksaan kehamilan (ANC) teratur.";
            }
            if (status === 'Waspada') {
                return "Terdapat indikasi Kurang Energi Kronis (KEK) atau anemia ringan. Tingkatkan asupan tinggi protein dan zat besi. Konsultasikan dengan bidan/Puskesmas untuk pemantauan ekstra.";
            }
            return "Risiko tinggi kehamilan! Indikasi kuat KEK dan Anemia yang berpotensi memicu stunting pada janin. Segera periksakan diri ke dokter kandungan (Sp.OG) atau RS terdekat untuk penanganan medis intensif.";
        } else {
            // balita
            if (status === 'Aman') {
                return "Pertumbuhan anak sangat baik dan optimal. Pertahankan pola asuh, asupan gizi seimbang, dan kebersihan lingkungan.";
            }
            if (status === 'Waspada') {
                return "Terdapat indikasi malnutrisi ringan. Perbaiki asupan protein hewani (telur/ikan) pada menu harian dan rutin pantau di Posyandu.";
            }
            return "Risiko tinggi stunting terdeteksi! Segera konsultasikan ke dokter anak atau Puskesmas terdekat untuk mendapatkan intervensi gizi medis/PMT.";
        }
    };

    const strokeDashoffset = 289 - (289 * (skor || 0)) / 100;

    return (
        <>
            <Head title="Hasil Analisis Risiko Stunting" />
            <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-teal-500 selection:text-white py-12 px-4 sm:px-6">
                
                {/* Centered Wide Card */}
                <div ref={cardRef} className="max-w-2xl mx-auto mt-10 bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-10">
                    
                    {/* Header & Navigation */}
                    <div className="mb-10 text-center relative flex items-center justify-center">
                        <Link href="/" className="absolute left-0 inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors group">
                            <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                            <span className="hidden sm:inline">Kembali</span>
                        </Link>
                        
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                            Hasil Analisis Risiko Stunting
                        </h1>
                    </div>

                    {/* Gauge / Score Box */}
                    <div className="flex flex-col items-center justify-center mb-10">
                        {/* Mock Score Circle */}
                        <div className="w-40 h-40 rounded-full bg-white border-8 border-slate-100 flex items-center justify-center shadow-inner mb-6 relative">
                            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                                <circle 
                                    cx="50" 
                                    cy="50" 
                                    r="46" 
                                    fill="transparent" 
                                    stroke="currentColor" 
                                    strokeWidth="8" 
                                    className={`${getGaugeColor()} transition-all duration-1000 ease-out`} 
                                    strokeDasharray="289" 
                                    strokeDashoffset={strokeDashoffset} 
                                    strokeLinecap="round" 
                                />
                            </svg>
                            <span className="text-5xl font-black text-slate-800 tracking-tighter">{skor || 0}<span className="text-3xl">%</span></span>
                        </div>
                        
                        {/* Status Badge */}
                        <div className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-full font-bold shadow-sm ${getStatusStyle()}`}>
                            {getStatusIcon()}
                            <span>Status: {status || 'Tidak Diketahui'}</span>
                        </div>
                    </div>

                    {/* Data Summary (Rincian Data Input) */}
                    <div className="mb-8">
                        <h3 className="text-xs sm:text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">Data yang dianalisis:</h3>
                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {inputData && Object.entries(inputData).map(([key, value]) => {
                                    // Make keys readable
                                    let readableKey = key;
                                    let suffix = '';
                                    if (key === 'age') { readableKey = 'Usia Balita'; suffix = ' Bulan'; }
                                    if (key === 'height') { readableKey = 'Tinggi Badan'; suffix = ' cm'; }
                                    if (key === 'weight') { readableKey = 'Berat Badan'; suffix = ' kg'; }
                                    if (key === 'gender') { readableKey = 'Jenis Kelamin'; }
                                    if (key === 'environment') { readableKey = 'Kondisi Lingkungan'; }
                                    if (key === 'motherAge') { readableKey = 'Usia Ibu'; suffix = ' Tahun'; }
                                    if (key === 'gestationalAge') { readableKey = 'Usia Kehamilan'; suffix = ' Bulan'; }
                                    if (key === 'lila') { readableKey = 'LILA'; suffix = ' cm'; }
                                    if (key === 'hb') { readableKey = 'Kadar Hb'; suffix = ' g/dL'; }

                                    return (
                                        <div key={key} className="flex items-start space-x-3">
                                            <Info className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                                            <div>
                                                <p className="text-xs text-slate-500 font-medium capitalize">{readableKey}</p>
                                                <p className="text-sm font-bold text-slate-800">{value}{suffix}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Medical Recommendation */}
                    <div className={`border rounded-2xl p-6 mb-10 shadow-sm relative overflow-hidden ${getRecommendationStyle()}`}>
                        <div className="absolute -right-4 -top-4 opacity-10">
                            <Stethoscope className={`w-32 h-32 ${getRecommendationIconColor()}`} />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center space-x-3 mb-3">
                                <Stethoscope className={`w-6 h-6 ${getRecommendationIconColor()}`} />
                                <h3 className="text-lg font-bold">Rekomendasi Medis</h3>
                            </div>
                            <p className="leading-relaxed text-sm sm:text-base font-medium">
                                {getRecommendationText()}
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons (Footer) */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                        <button 
                            onClick={handleDownloadImage}
                            disabled={isDownloading}
                            className="w-full sm:w-1/2 flex items-center justify-center space-x-2 bg-white text-teal-600 font-bold text-base sm:text-lg py-4 px-6 rounded-2xl border-2 border-teal-500 hover:bg-teal-50 hover:shadow-md transition-all duration-300 disabled:opacity-50"
                        >
                            <ImageIcon className="w-5 h-5" />
                            <span>{isDownloading ? 'Menyimpan...' : 'Simpan Gambar'}</span>
                        </button>
                        <Link href="/" className="w-full sm:w-1/2 flex items-center justify-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white font-bold text-base sm:text-lg py-4 px-6 rounded-2xl shadow-lg shadow-teal-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent">
                            <Home className="w-5 h-5" />
                            <span>Kembali ke Beranda</span>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}
