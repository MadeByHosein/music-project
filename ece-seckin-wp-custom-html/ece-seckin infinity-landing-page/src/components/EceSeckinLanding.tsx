'use client';
import React, { useState } from 'react';

const songs = [
{ id: 1, title: 'Adeyyo', artist: 'Ece Seçkin', img: '' },
{ id: 2, title: 'Aman Aman', artist: 'Ece Seçkin', img: '' },
{ id: 3, title: 'Dibine Dibine', artist: 'Ece Seçkin', img: '' },
{ id: 4, title: 'Olsun', artist: 'Ece Seçkin', img: '' },
{ id: 5, title: 'Hoşuna Mı Gidiyor', artist: 'Ece Seçkin', img: '' },
{ id: 6, title: 'Acayip İyi', artist: 'Ece Seçkin', img: '' },
{ id: 7, title: 'Güzelim', artist: 'Ece Seçkin', img: '' },
{ id: 8, title: 'Sen Hala Ordasın', artist: 'Ece Seçkin', img: '' },
{ id: 9, title: 'Masum', artist: 'Ece Seçkin', img: '' },
{ id: 10, title: 'Hoş Geldin', artist: 'Ece Seçkin', img: '' },
{ id: 11, title: 'Duysunlar', artist: 'Gülden x Ece Seçkin', img: '' },
{ id: 12, title: 'Yana Yana', artist: 'Ece Seçkin', img: '' },
{ id: 13, title: 'Kör', artist: 'Ece Seçkin', img: '' },
{ id: 14, title: 'Aşka Yürek Gerek', artist: 'Reynmen, Ece Seçkin, Mustafa Sandal', img: '' },
{ id: 15, title: 'Nos Fuimos Lejos', artist: 'Enrique Iglesias , Ece Seçkin & El Micha', img: '' },
{ id: 16, title: 'Sayın Seyirciler', artist: 'Ozan Doğulu, Ece Seçkin', img: '' },
{ id: 17, title: 'Aya Benzer', artist: 'Ece Seçkin', img: '' },
{ id: 18, title: 'Yastık', artist: 'Ece Seçkin', img: '' },
{ id: 19, title: 'Vazgeçtim', artist: 'Ece Seçkin', img: '' },
{ id: 20, title: 'Gecmis_Zaman', artist: 'Ece Seçkin', img: '' }];


const similarArtists = [
{ name: 'Hadise', img: '' },
{ name: 'Aleyna Tilki', img: '' },
{ name: 'Simge', img: '' },
{ name: 'Hande Yener', img: '' },
{ name: 'Demet Akalın', img: '' },
{ name: 'Gülşen', img: '' },
{ name: 'Yıldız Tilbe', img: '' },
{ name: 'Ziynet Sali', img: '' }];


const faqData = [
{ q: 'Ece Seçkin کیست؟', a: 'Ece Seçkin خواننده و آهنگساز محبوب ترکیه‌ای است که با سبک منحصربهفرد خود در موسیقی پاپ ترکیه شناخته شده است.' },
{ q: 'Ece Seçkin اهل کدام شهر است؟', a: 'Ece Seçkin در استانبول ترکیه متولد شده و بزرگ شده است.' },
{ q: 'معروفترین آهنگ Ece Seçkin چیست؟', a: 'معروفترین آهنگهای Ece Seçkin شامل Adeyyo، Aman Aman، Dibine Dibine و Hoşuna Mı Gidiyor می‌شوند.' },
{ q: 'سبک موسیقی Ece Seçkin چیست؟', a: 'Ece Seçkin در سبک پاپ و ریتم ترکیه فعالیت می‌کند و آهنگهایش به خاطر ملودی‌های جذاب و ریتم‌های پرانرژی شناخته می‌شوند.' },
{ q: 'آیا Ece Seçkin آلبوم منتشر کرده است؟', a: 'بلی، Ece Seçkin چندین آلبوم و سینگل منتشر کرده است که با استقبال بسیار خوبی روبرو شده‌اند.' },
{ q: 'آیا Ece Seçkin در شبکه‌های اجتماعی فعال است؟', a: 'بلی، Ece Seçkin در اینستاگرام، یوتیوب و توییتر حضور فعال دارد و میلیون‌ها فالوور دارد.' },
{ q: 'آیا امکان پخش آنلاین آهنگ ها وجود دارد؟', a: 'بلی، شما می‌توانید تمام آهنگهای Ece Seçkin را به صورت آنلاین پخش کنید بدون نیاز به دانلود.' },
{ q: 'چگونه آهنگ های Ece Seçkin را دانلود کنم؟', a: 'برای دانلود آهنگهای Ece Seçkin کافیست روی دکمه دانلود 320 یا 128 کلیک کنید.' }];


const popularSongs = [
{ title: 'Adeyyo', img: '' },
{ title: 'Aman Aman', img: '' },
{ title: 'Dibine Dibine', img: '' },
{ title: 'Hoşuna Mı Gidiyor', img: '' },
{ title: 'Yana Yana', img: '' }];


const timeline = [
{ year: '2011', color: '#7B2FBE', text: 'شروع فعالیت حرفه‌ای با انتشار اولین تک آهنگ' },
{ year: '2012', color: '#F59E0B', text: 'انتشار آهنگ Adeyyo و شهرت در ترکیه' },
{ year: '2016', color: '#22C55E', text: 'انتشار آلبوم اول و همکاری‌های موفق' },
{ year: '2018', color: '#EF4444', text: 'محبوبیت بیشتر در سطح بین‌الملل' },
{ year: '2024', color: '#3B82F6', text: 'انتشار جدیدترین آهنگ‌ها و فعالیت مستمر' }];


export default function EceSeckinLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImgError = (key: string) => {
    setImgErrors((prev) => ({ ...prev, [key]: true }));
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => prev === idx ? null : idx);
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white" style={{ fontFamily: 'Vazirmatn, Tahoma, Arial, sans-serif', direction: 'rtl' }}>
      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0d0618 0%, #130a2a 40%, #1a0535 70%, #0f0220 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}>

        {/* Animated mesh gradient blobs */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', width: '700px', height: '700px',
            top: '-200px', right: '-150px',
            background: 'radial-gradient(circle, rgba(138,43,226,.55) 0%, rgba(180,70,255,.25) 40%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'blobPulse 8s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute', width: '500px', height: '500px',
            bottom: '-100px', left: '-100px',
            background: 'radial-gradient(circle, rgba(255,80,180,.30) 0%, rgba(200,50,255,.15) 50%, transparent 70%)',
            filter: 'blur(70px)',
            animation: 'blobPulse 10s ease-in-out 2s infinite',
          }} />
          <div style={{
            position: 'absolute', width: '400px', height: '400px',
            top: '40%', left: '40%',
            background: 'radial-gradient(circle, rgba(100,50,255,.20) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'blobPulse 12s ease-in-out 4s infinite',
          }} />
          {/* Grid lines overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
        </div>

        <div className="relative w-full px-6 mx-auto max-w-7xl sm:px-10 lg:px-16" style={{ zIndex: 3 }}>
          <div className="flex flex-col items-center justify-between gap-12 py-16 lg:flex-row lg:py-24">

            {/* LEFT: Text content */}
            <div className="flex-1 w-full">

              {/* Badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(138,43,226,.25)',
                border: '1px solid rgba(180,100,255,.35)',
                borderRadius: '999px',
                padding: '6px 18px',
                marginBottom: '28px',
                backdropFilter: 'blur(10px)',
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c084fc', display: 'inline-block', boxShadow: '0 0 8px #c084fc' }} />
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#d8b4fe', letterSpacing: '0.5px' }}>
                  دانلود رایگان · کیفیت بالا
                </span>
              </div>

              <h1 style={{ fontWeight: 900, lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-1px' }}>
                <span style={{
                  display: 'block',
                  fontSize: 'clamp(28px, 4vw, 52px)',
                  color: 'rgba(255,255,255,.75)',
                  fontWeight: 700,
                  marginBottom: '8px',
                }}>
                  دانلود آهنگ های
                </span>
                <span style={{
                  display: 'block',
                  fontSize: 'clamp(52px, 8vw, 96px)',
                  background: 'linear-gradient(135deg, #e879f9 0%, #c026d3 30%, #a855f7 60%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 40px rgba(192,38,211,.4))',
                }}>
                  Ece Seçkin
                </span>
              </h1>

              <p style={{
                fontSize: 'clamp(15px, 1.8vw, 19px)',
                lineHeight: 1.9,
                color: 'rgba(255,255,255,.55)',
                marginBottom: '44px',
                maxWidth: '520px',
              }}>
                جدیدترین و محبوب‌ترین آهنگ‌ها با کیفیت MP3 320 و 128
                <br />همراه با متن آهنگ و پخش آنلاین
              </p>

              {/* Feature Cards */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '44px' }}>
                {[
                  { icon: '🎵', label: 'آهنگ منتخب', sub: '۲۰+ آهنگ', color: 'rgba(168,85,247,.3)', glow: 'rgba(168,85,247,.5)' },
                  { icon: '🎧', label: 'پخش آنلاین', sub: 'بدون دانلود', color: 'rgba(236,72,153,.3)', glow: 'rgba(236,72,153,.5)' },
                  { icon: '💿', label: 'MP3 320', sub: 'کیفیت بالا', color: 'rgba(99,102,241,.3)', glow: 'rgba(99,102,241,.5)' },
                  { icon: '🎼', label: 'MP3 128', sub: 'حجم کم', color: 'rgba(20,184,166,.3)', glow: 'rgba(20,184,166,.5)' },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="cursor-pointer group"
                    style={{
                      width: '130px',
                      height: '130px',
                      background: 'rgba(255,255,255,.05)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,.10)',
                      borderRadius: '22px',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      boxShadow: '0 8px 32px rgba(0,0,0,.3)',
                      transition: 'all .35s cubic-bezier(.34,1.56,.64,1)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.transform = 'translateY(-10px) scale(1.04)';
                      el.style.boxShadow = `0 24px 48px rgba(0,0,0,.4), 0 0 30px ${f.glow}`;
                      el.style.border = `1px solid ${f.color.replace('.3)', '.6)')}`;
                      el.style.background = f.color;
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.transform = 'translateY(0) scale(1)';
                      el.style.boxShadow = '0 8px 32px rgba(0,0,0,.3)';
                      el.style.border = '1px solid rgba(255,255,255,.10)';
                      el.style.background = 'rgba(255,255,255,.05)';
                    }}>
                    <div style={{ fontSize: '30px', lineHeight: 1 }}>{f.icon}</div>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: 'rgba(255,255,255,.9)', textAlign: 'center' }}>{f.label}</div>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,.45)', textAlign: 'center' }}>{f.sub}</div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href="#songs"
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    padding: '16px 40px', borderRadius: '14px', textDecoration: 'none',
                    background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #6d28d9 100%)',
                    color: '#fff', fontSize: '18px', fontWeight: 800,
                    boxShadow: '0 20px 50px rgba(124,58,237,.5), 0 0 0 1px rgba(168,85,247,.3)',
                    transition: 'all .35s cubic-bezier(.34,1.56,.64,1)',
                    position: 'relative', overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = 'translateY(-4px) scale(1.02)';
                    el.style.boxShadow = '0 30px 60px rgba(124,58,237,.65), 0 0 0 1px rgba(168,85,247,.5)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = 'translateY(0) scale(1)';
                    el.style.boxShadow = '0 20px 50px rgba(124,58,237,.5), 0 0 0 1px rgba(168,85,247,.3)';
                  }}>
                  <span>مشاهده آهنگ‌ها</span>
                  <span style={{ fontSize: '20px' }}>↓</span>
                </a>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  color: 'rgba(255,255,255,.45)', fontSize: '14px', fontWeight: 600,
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 6px #4ade80' }} />
                  دسترسی رایگان
                </div>
              </div>
            </div>

            {/* RIGHT: Artist image */}
            <div className="relative flex items-end justify-center flex-shrink-0" style={{ width: 'clamp(260px, 38vw, 480px)', minHeight: '500px', zIndex: 3 }}>
              {/* Outer glow ring */}
              <div style={{
                position: 'absolute',
                width: '420px', height: '420px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(192,38,211,.5) 0%, rgba(124,58,237,.3) 40%, transparent 70%)',
                filter: 'blur(50px)',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                animation: 'blobPulse 6s ease-in-out infinite',
                zIndex: 1,
                pointerEvents: 'none',
              }} />

              {/* Decorative ring */}
              <div style={{
                position: 'absolute',
                width: '380px', height: '380px',
                borderRadius: '50%',
                border: '1px solid rgba(192,38,211,.25)',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 2,
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute',
                width: '440px', height: '440px',
                borderRadius: '50%',
                border: '1px dashed rgba(168,85,247,.15)',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 2,
                pointerEvents: 'none',
              }} />

              {/* Shadow under image */}
              <div style={{
                position: 'absolute', bottom: '0', width: '300px', height: '60px',
                background: 'rgba(100,20,180,.5)', borderRadius: '50%', filter: 'blur(30px)', zIndex: 2, pointerEvents: 'none',
              }} />

              {/* Artist image */}
              {!imgErrors['hero'] ? (
                <img
                  src="/ece.png"
                  alt="Ece Seçkin - خواننده ترکیه‌ای"
                  style={{
                    position: 'relative', zIndex: 5,
                    width: '100%', maxWidth: '420px',
                    objectFit: 'cover', objectPosition: 'top',
                    filter: 'drop-shadow(0 30px 60px rgba(0,0,0,.5)) drop-shadow(0 0 80px rgba(192,38,211,.4))',
                    maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
                    transition: 'transform .6s cubic-bezier(.34,1.56,.64,1)',
                    animation: 'heroFloat 6s ease-in-out infinite',
                  }}
                  onError={() => handleImgError('hero')}
                />
              ) : (
                <div style={{
                  position: 'relative', zIndex: 5, width: '100%', maxWidth: '420px', height: '480px',
                  background: 'linear-gradient(135deg, #7B2FBE, #C084FC)',
                  borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontSize: '80px' }}>🎵</span>
                </div>
              )}

              {/* Floating stat cards */}
              <div style={{
                position: 'absolute', top: '60px', right: '-10px',
                background: 'rgba(255,255,255,.08)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,.15)',
                borderRadius: '16px',
                padding: '12px 16px',
                zIndex: 7,
                animation: 'floatNote 5s ease-in-out infinite',
                boxShadow: '0 8px 32px rgba(0,0,0,.3)',
              }}>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.5)', fontWeight: 600, marginBottom: '2px' }}>محبوب‌ترین</div>
                <div style={{ fontSize: '15px', color: '#fff', fontWeight: 800 }}>Adeyyo 🔥</div>
              </div>

              <div style={{
                position: 'absolute', bottom: '100px', left: '-10px',
                background: 'rgba(255,255,255,.08)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,.15)',
                borderRadius: '16px',
                padding: '12px 16px',
                zIndex: 7,
                animation: 'floatNote 5s ease-in-out 2s infinite',
                boxShadow: '0 8px 32px rgba(0,0,0,.3)',
              }}>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.5)', fontWeight: 600, marginBottom: '2px' }}>آهنگ‌ها</div>
                <div style={{ fontSize: '15px', color: '#fff', fontWeight: 800 }}>۲۰+ آهنگ 🎵</div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes blobPulse {
            0%, 100% { transform: scale(1); opacity: .85; }
            50% { transform: scale(1.08); opacity: 1; }
          }
          @keyframes heroFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-14px); }
          }
          @keyframes floatNote {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </section>

      {/* VPN NOTICE BANNER */}
      <div
        className="flex items-center justify-center w-full gap-2 px-4 py-2 text-xs font-medium sm:py-3 sm:text-sm"
        style={{ background: '#FEF3C7', borderBottom: '1px solid #F59E0B' }}>
        <span className="text-base text-yellow-500 sm:text-lg">⚠️</span>
        <span style={{ color: '#92400E' }}>برای دانلود آهنگ، لطفاً فیلترشکن <strong>(VPN)</strong> خود را خاموش کنید.</span>
      </div>

      {/* SONGS LIST SECTION */}
      <section className="max-w-6xl px-3 py-6 mx-auto sm:px-4 sm:py-8">
        <h2 className="mb-4 text-lg font-bold text-right sm:text-xl sm:mb-6" style={{ color: '#1a1a1a' }}>
          20 آهنگ برتر <span style={{ color: '#7B2FBE' }}>Ece Seçkin</span>
        </h2>

        <div className="overflow-hidden border border-gray-200 rounded-lg">
          {songs.map((song, idx) => (
            <div
              key={song.id}
              className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-2.5 sm:py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
              style={{ background: idx % 2 === 0 ? '#fff' : '#fafafa' }}>
              
              {/* Number */}
              <span className="flex-shrink-0 w-5 text-xs font-bold text-center text-gray-400 sm:text-sm sm:w-6">
                {String(song.id).padStart(2, '0')}
              </span>

              {/* Thumbnail */}
              <div className="flex-shrink-0 w-8 h-8 overflow-hidden bg-gray-200 rounded sm:w-10 sm:h-10">
                <img
                  src={song.img}
                  alt={`${song.title} - ${song.artist}`}
                  className="object-cover w-full h-full"
                  onError={(e) => { (e.target as HTMLImageElement).src = ''; }} />
              </div>

              {/* Title & Artist */}
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-gray-900 truncate sm:text-sm">{song.title}</div>
                <div className="hidden text-xs text-gray-500 truncate xs:block sm:block">{song.artist}</div>
              </div>

              {/* Buttons */}
              <div className="flex items-center flex-shrink-0 gap-1 sm:gap-2">
                {/* On mobile: show only icons, on sm+: show text */}
                <button
                  className="flex items-center gap-1 text-xs font-medium px-1.5 sm:px-3 py-1 sm:py-1.5 rounded-md transition-all hover:opacity-80"
                  style={{ color: '#7B2FBE', background: '#F3E8FF', border: '1px solid #DDD6FE' }}>
                  <svg className="flex-shrink-0 w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="hidden sm:inline">پخش آنلاین</span>
                </button>
                <button
                  className="flex items-center gap-1 text-xs font-medium px-1.5 sm:px-3 py-1 sm:py-1.5 rounded-md transition-all hover:opacity-80"
                  style={{ color: '#fff', background: '#22C55E' }}>
                  <svg className="flex-shrink-0 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="hidden xs:inline">320</span>
                  <span className="hidden sm:inline"> کیفیت</span>
                </button>
                <button
                  className="flex items-center gap-1 text-xs font-medium px-1.5 sm:px-3 py-1 sm:py-1.5 rounded-md transition-all hover:opacity-80"
                  style={{ color: '#fff', background: '#22C55E' }}>
                  <svg className="flex-shrink-0 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="hidden xs:inline">128</span>
                  <span className="hidden sm:inline"> کیفیت</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT + QUICK INFO + STATS */}
      <section className="max-w-6xl px-3 py-10 mx-auto sm:px-4 sm:py-16">
        {/* Section Header */}
        <div className="mb-8 text-center sm:mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3"
            style={{ background: 'linear-gradient(135deg, #F3E8FF, #EDE9FE)', color: '#7B2FBE' }}>
            بیشتر بدانید
          </span>
          <h2 className="text-2xl font-extrabold sm:text-3xl" style={{ color: '#1a1a1a' }}>
            درباره <span style={{ color: '#7B2FBE' }}>Ece Seçkin</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 sm:gap-5">

          {/* About Card — spans 7 cols */}
          <div className="relative p-6 overflow-hidden md:col-span-7 rounded-2xl sm:p-8"
            style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d0a5e 60%, #3b0f7a 100%)' }}>
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-48 h-48 rounded-full pointer-events-none opacity-20 blur-3xl"
              style={{ background: '#7B2FBE', transform: 'translate(-30%, -30%)' }} />
            <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full pointer-events-none opacity-15 blur-3xl"
              style={{ background: '#F59E0B', transform: 'translate(30%, 30%)' }} />

            {/* Quote mark */}
            <div className="mb-2 font-serif text-6xl leading-none select-none sm:text-7xl opacity-30" style={{ color: '#A855F7' }}>"</div>

            <p className="relative z-10 mb-6 text-sm leading-loose text-purple-100 sm:text-base sm:leading-loose">
              Ece Seçkin یکی از خوانندگان محبوب و پرطرفدار ترکیه است که با سبک خاص، صدای منحصربهفرد و آهنگ‌های ترکی شناخته شده است. سبک او در موسیقی پاپ و دنس‌پاپ باعث شده تا در میان مخاطبان مختلف جایگاه ویژه‌ای پیدا کند. بسیاری از آهنگ‌های او میلیون‌ها بار در یوتیوب و پلتفرم‌های مختلف پخش شده‌اند.
            </p>

            {/* Tags */}
            <div className="relative z-10 flex flex-wrap gap-2 mb-6">
              {['پاپ', 'دنس‌پاپ', 'ترکی', 'استانبول', 'فعال از ۲۰۱۱'].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{ background: 'rgba(168,85,247,0.25)', color: '#E9D5FF', border: '1px solid rgba(168,85,247,0.4)' }}>
                  {tag}
                </span>
              ))}
            </div>

            <button
              className="relative z-10 inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #7B2FBE, #A855F7)', color: '#fff', boxShadow: '0 4px 20px rgba(123,47,190,0.5)' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              مشاهده بیوگرافی کامل
            </button>
          </div>

          {/* Quick Info Card — spans 5 cols */}
          <div className="p-5 md:col-span-5 rounded-2xl sm:p-6"
            style={{ background: '#fafafa', border: '1px solid #ede9fe' }}>
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg"
                style={{ background: 'linear-gradient(135deg, #7B2FBE, #A855F7)' }}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                </svg>
              </div>
              <h3 className="text-base font-bold" style={{ color: '#1a1a1a' }}>اطلاعات سریع</h3>
            </div>

            <div className="space-y-1">
              {[
                { label: 'نام کامل', value: 'Ece Seçkin', icon: '👤' },
                { label: 'تاریخ تولد', value: '۱۲ سپتامبر ۱۹۰', icon: '🎂' },
                { label: 'محل تولد', value: 'استانبول، ترکیه', icon: '📍' },
                { label: 'سبک موسیقی', value: 'پاپ، دنس‌پاپ', icon: '🎵' },
                { label: 'شروع فعالیت', value: '۲۰۱۱', icon: '🚀' },
                { label: 'ملیت', value: 'ترکیه', icon: '🇹🇷' },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between py-2.5 px-3 rounded-xl transition-colors hover:bg-purple-50"
                  style={{ borderBottom: i < 5 ? '1px solid #f3e8ff' : 'none' }}>
                  <span className="text-xs font-semibold sm:text-sm" style={{ color: '#1a1a1a' }}>{row.value}</span>
                  <span className="text-xs sm:text-sm text-gray-400 flex items-center gap-1.5">
                    {row.label}
                    <span className="text-base">{row.icon}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Row — 4 cards spanning full width */}
          {[
            { icon: '🎵', label: 'آهنگ در سایت', value: '۲۰', sub: 'آهنگ برتر', color: '#7B2FBE', bg: 'linear-gradient(135deg, #F3E8FF, #EDE9FE)' },
            { icon: '🎧', label: 'کیفیت دانلود', value: '320', sub: 'کیلوبیت بر ثانیه', color: '#0891B2', bg: 'linear-gradient(135deg, #E0F2FE, #BAE6FD)' },
            { icon: '📅', label: 'آخرین بروزرسانی', value: '۱۴۰۵', sub: 'سال شمسی', color: '#D97706', bg: 'linear-gradient(135deg, #FEF3C7, #FDE68A)' },
            { icon: '🎼', label: 'فرمت فایل', value: 'MP3', sub: 'پشتیبانی همه دستگاه‌ها', color: '#059669', bg: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2 p-5 transition-transform duration-200 cursor-default md:col-span-3 rounded-2xl sm:p-6 hover:-translate-y-1"
              style={{ background: stat.bg }}>
              <div className="flex items-center justify-between">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.6)', color: stat.color }}>
                  {stat.sub}
                </span>
              </div>
              <div className="mt-1 text-3xl font-extrabold sm:text-4xl" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-xs font-medium text-gray-600 sm:text-sm">{stat.label}</div>
            </div>
          ))}

        </div>
      </section>

      {/* POPULAR SONGS */}
      <section className="max-w-6xl px-3 py-6 mx-auto sm:px-4 sm:py-8">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <button
            className="text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full transition-all hover:opacity-80"
            style={{ color: '#7B2FBE', background: '#F3E8FF', border: '1px solid #DDD6FE' }}>
            مشاهده همه
          </button>
          <h2 className="text-base font-bold sm:text-xl" style={{ color: '#1a1a1a' }}>
            محبوب‌ترین آهنگ‌ها <span style={{ color: '#7B2FBE' }}>🎵</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 sm:gap-4">
          {popularSongs.map((song, i) => (
            <div key={i} className="cursor-pointer group">
              <div className="relative mb-2 overflow-hidden rounded-xl" style={{ aspectRatio: '1/1' }}>
                <img
                  src={song.img}
                  alt={`${song.title} - آهنگ محبوب Ece Seçkin`}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/assets/images/no_image.png'; }} />
                {/* Gradient overlay */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: 'linear-gradient(to top, rgba(123,47,190,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }}>
                </div>
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg sm:w-12 sm:h-12"
                    style={{ background: 'rgba(255,255,255,0.95)' }}>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-[-2px]" fill="#7B2FBE" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Rank badge */}
                <div className="absolute flex items-center justify-center w-6 h-6 text-xs font-bold text-white rounded-full shadow top-2 right-2"
                  style={{ background: '#7B2FBE' }}>
                  {i + 1}
                </div>
              </div>
              <p className="text-xs font-semibold text-right text-gray-800 truncate sm:text-sm">{song.title}</p>
              <p className="text-xs text-right text-gray-400">Ece Seçkin</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAREER TIMELINE */}
      <section className="py-6 sm:py-8" style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d0a5e 50%, #1a0533 100%)' }}>
        <div className="max-w-6xl px-3 mx-auto sm:px-4">
          <h2 className="mb-6 text-base font-bold text-right text-white sm:text-xl sm:mb-8">
            مسیر فعالیت هنری <span className="text-purple-300">✦</span>
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 sm:gap-4">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col gap-2 p-4 rounded-2xl sm:p-5"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: `1px solid ${item.color}40`,
                  backdropFilter: 'blur(8px)'
                }}>
                {/* Year badge */}
                <div
                  className="inline-flex items-center self-end px-3 py-1 text-xs font-bold text-white rounded-full"
                  style={{ background: item.color }}>
                  {item.year}
                </div>
                {/* Accent line */}
                <div className="w-8 h-1 mt-1 rounded-full" style={{ background: item.color }}></div>
                {/* Text */}
                <p className="text-xs leading-relaxed text-right text-purple-100 sm:text-sm">{item.text}</p>
                {/* Step number */}
                <span className="absolute text-3xl font-black text-white select-none bottom-3 left-3 opacity-10"
                  style={{ lineHeight: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-6xl px-3 py-6 mx-auto sm:px-4 sm:py-8">
        <h2 className="mb-4 text-lg font-bold text-center sm:text-xl sm:mb-6" style={{ color: '#1a1a1a' }}>سوالات متداول</h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 sm:gap-3">
          {faqData.map((faq, idx) => (
            <div
              key={idx}
              className="overflow-hidden border border-gray-200 rounded-lg">
              <button
                className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 text-right hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(idx)}>
                <span className="flex-1 text-xs font-medium text-right text-gray-800 sm:text-sm">{faq.q}</span>
                <svg
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 flex-shrink-0 mr-2 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === idx && (
                <div className="px-3 pb-3 text-xs leading-relaxed text-gray-600 border-t border-gray-100 sm:px-4 sm:text-sm">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SIMILAR ARTISTS */}
      <section className="max-w-6xl px-3 py-6 mx-auto sm:px-4 sm:py-8">
        <h2 className="mb-4 text-lg font-bold text-center sm:text-xl sm:mb-6" style={{ color: '#1a1a1a' }}>خوانندگان مشابه</h2>
        <div className="grid justify-center grid-cols-4 gap-3 sm:flex sm:flex-wrap sm:gap-6">
          {similarArtists.map((artist, i) => (
            <div key={i} className="flex flex-col items-center cursor-pointer group">
              <div className="mx-auto mb-1 overflow-hidden transition-colors border-2 border-gray-200 rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 sm:mb-2 group-hover:border-purple-400">
                <img
                  src={artist.img}
                  alt={`${artist.name} - خواننده مشابه Ece Seçkin`}
                  className="object-cover w-full h-full"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/assets/images/no_image.png'; }} />
              </div>
              <span className="text-xs font-medium text-center text-gray-700">{artist.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center sm:mt-6">
          <button
            className="px-4 py-2 text-xs font-medium transition-all border rounded-lg sm:text-sm sm:px-6 hover:opacity-80"
            style={{ color: '#7B2FBE', borderColor: '#7B2FBE' }}>
            مشاهده همه خوانندگان
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-4 py-3 text-xs text-center text-gray-500 border-t border-gray-200 sm:py-4"
        style={{ background: '#f9fafb' }}>
        <p>
          تمامی حقوق این صفحه محفوظ است · دانلود آهنگ های Ece Seçkin با کیفیت بالا و لینک مستقیم
        </p>
      </footer>
    </div>
  );
}