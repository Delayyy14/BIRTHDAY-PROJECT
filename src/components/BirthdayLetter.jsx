import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BirthdayLetter = ({ onBackClick }) => {
    const [randomCats, setRandomCats] = useState([]);

    const catImages = [
        '/images/cato/download (5).jpeg',
        '/images/cato/Florecita gatito 🌸🌸.jpeg',
        '/images/cato/_°•°emoji White cat°•°_.jpeg',
        '/images/cato/꒰ ִ ֺ ⊹ Credits @Basilleaf 🫧 ⊹ ֺ ִ ꒱.jpeg',
        '/images/cato/download (4).jpeg'
    ];

    useEffect(() => {
        // Generate random cat positions
        const generateRandomCats = () => {
            const cats = [];
            for (let i = 0; i < 6; i++) {
                cats.push({
                    id: i,
                    src: catImages[Math.floor(Math.random() * catImages.length)],
                    position: {
                        top: Math.random() * 80 + 10, // 10% to 90% from top
                        left: Math.random() * 80 + 10, // 10% to 90% from left
                        right: Math.random() * 80 + 10, // 10% to 90% from right
                    },
                    size: Math.random() * 20 + 40, // 40px to 60px
                    rotation: Math.random() * 20 - 10, // -10 to 10 degrees
                    delay: Math.random() * 2 // 0 to 2 seconds delay
                });
            }
            setRandomCats(cats);
        };

        generateRandomCats();

        // Auto-play music when component mounts
        const playMusic = () => {
            const audio = document.querySelector('audio');
            if (audio) {
                audio.volume = 0.4;
                audio.loop = true;
                audio.play().catch(e => {
                    console.log('Auto-play failed:', e);
                    // If auto-play fails, try again after a short delay
                    setTimeout(() => {
                        audio.play().catch(err => {
                            console.log('Second attempt failed:', err);
                        });
                    }, 1000);
                });
            }
        };

        // Small delay to ensure audio element is ready
        setTimeout(playMusic, 500);
    }, []);


    return (
        <div className="relative min-h-screen flex items-center justify-center p-4">
            {/* Background decorations - more organic */}
            <div className="absolute top-16 left-16 w-40 h-40 bg-pink-200/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute top-24 right-20 w-32 h-32 bg-pink-300/30 rounded-full blur-xl animate-bounce"></div>
            <div className="absolute bottom-24 left-20 w-36 h-36 bg-pink-100/40 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 right-16 w-28 h-28 bg-pink-200/25 rounded-full blur-xl animate-bounce"></div>

            {/* Main content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-xl border border-pink-200/50 max-w-4xl w-full relative overflow-hidden"
            >
                {/* Back button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onBackClick}
                    className="absolute top-4 left-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 text-sm font-medium"
                >
                    ← Kembali
                </motion.button>

                {/* Audio element - using local file */}
                <audio
                    ref={(audio) => {
                        if (audio) {
                            audio.volume = 0.4;
                            audio.loop = true;
                            audio.preload = 'auto';
                        }
                    }}
                    onLoadedData={() => {
                        console.log('Birthday song loaded successfully');
                    }}
                    onError={(e) => {
                        console.log('Audio error:', e);
                    }}
                >
                    <source src="/happy-birthday-334876.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>

                {/* Letter content - More organic design */}
                <div className="mt-8">

                    {/* Main letter content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative max-w-3xl mx-auto"
                    >
                        {/* Letter paper effect */}
                        <div className="relative bg-white/90 backdrop-blur-sm rounded-none shadow-2xl border border-pink-200/50 overflow-hidden">
                            {/* Paper texture overlay */}
                            <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-pink-100 to-transparent"></div>

                            {/* Letter content */}
                            <div className="relative p-8 md:p-12">

                                {/* Greeting */}
                                <div className="mb-8">
                                    <p className="text-2xl md:text-3xl text-pink-600 font-bold font-serif mb-4">
                                        Dear Awa,
                                    </p>
                                </div>

                                {/* Letter body */}
                                <div className="space-y-6 text-gray-700 leading-relaxed text-lg md:text-xl">
                                    <p className="indent-8">
                                        Selamat ulang tahun ke-18 ya. Hari ini jadi momen spesial banget dalam hidupmu. Usia 18 ini tandanya kamu mulai masuk fase dewasa. Aku harap kamu sambut semuanya dengan semangat tinggi. Dan penuh optimisme juga.
                                    </p>

                                    <p className="indent-8">
                                        Di usia baru ini, semoga kamu selalu dikelilingi kebahagiaan. Kesehatan yang bagus terus. Kebahagiaan yang banyak lagi. Setiap hari bawa peluang baru buat tumbuh. Belajar lebih banyak. Dan jadi versi terbaik dirimu sendiri.
                                    </p>

                                    <p className="indent-8">
                                    Aku ngga nyangka kamu sekarang jauh lebih hebat ya, kamu bisa kuat sejauh ini bisa bertahan sama segala hal, im proudd of youu, intinya jangan lupa berterimakasih sama dirimu sendiri,sayangi diri sendiri ya.
                                    </p>

                                    <p className="indent-8">
                                        Aku doain impian-impianmu tercapai dengan bagus. Cita-cita juga. Kamu dikelilingi orang-orang yang sayang. Yang dukung kamu selalu. Terus jadi orang baik. Cerdas pula. Penuh kasih. Dan inspirasi buat sekitarmu.
                                    </p>

                                </div>

                                {/* Closing */}
                                <div className="mt-12 text-right">
                                    <p className="text-2xl md:text-3xl text-pink-600 font-bold font-serif mb-4">
                                        Happy 18th Birthday!
                                    </p>
                                    <p className="text-lg text-pink-500 italic">
                                        With love and best wishes
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements around letter */}
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-200 rounded-full opacity-60"></div>
                        <div className="absolute -top-2 -right-6 w-6 h-6 bg-pink-300 rounded-full opacity-50"></div>
                        <div className="absolute -bottom-4 -left-6 w-10 h-10 bg-pink-100 rounded-full opacity-70"></div>
                        <div className="absolute -bottom-2 -right-4 w-7 h-7 bg-pink-200 rounded-full opacity-60"></div>
                    </motion.div>

                    {/* Wishes section - more organic */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-16 max-w-4xl mx-auto"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-3 h-3 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Semoga selalu diberikan kesehatan dan kebahagiaan yang berlimpah
                                    </p>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-3 h-3 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Semoga sukses dalam segala hal yang dikerjakan dengan penuh dedikasi
                                    </p>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-3 h-3 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Semoga dikelilingi oleh orang-orang yang baik dan mendukung
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-3 h-3 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Semoga impian dan cita-cita tercapai dengan indah
                                    </p>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-3 h-3 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Semoga selalu dalam lindungan dan berkah Tuhan
                                    </p>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-3 h-3 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Semoga diberikan keberkahan yang melimpah dalam hidup
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Special message - more elegant */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-16 max-w-3xl mx-auto"
                    >
                        <div className="relative bg-gradient-to-r from-pink-200 to-pink-300 rounded-2xl p-8 md:p-12 text-center shadow-xl">
                            <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
                            <div className="relative">
                                <h3 className="text-2xl md:text-3xl font-bold text-pink-700 mb-6 font-serif">
                                    Pesan Khusus
                                </h3>
                                <blockquote className="text-lg md:text-xl text-pink-800 italic leading-relaxed">
                                    "Semoga di usia 18 tahun ini, kamu menjadi pribadi yang lebih dewasa,
                                    bijaksana, dan penuh dengan cinta kasih. Teruslah bersinar dan menjadi
                                    inspirasi bagi banyak orang. Selamat ulang tahun, Clarista!"
                                </blockquote>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Photo Film Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="mt-16 flex justify-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                        className="relative"
                    >
                        <img 
                            src="/images/cato/photofilm.png" 
                            alt="Photo Film" 
                            className="w-96 md:w-[600px] lg:w-[700px] h-auto object-contain"
                            onError={(e) => {
                                e.target.src = '/images/cato/download (5).jpeg';
                            }}
                        />
                    </motion.div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-pink-300 rounded-full animate-ping"></div>
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute -bottom-1 -left-2 w-4 h-4 bg-pink-200 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                <div className="absolute -bottom-2 -right-1 w-2 h-2 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '0.9s' }}></div>
            </motion.div>

            {/* Random floating cats */}
            {randomCats.map((cat, index) => (
                <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, scale: 0, rotate: cat.rotation }}
                    animate={{
                        opacity: 0.7,
                        scale: 1,
                        rotate: cat.rotation,
                        y: [0, -10, 0]
                    }}
                    transition={{
                        duration: 0.8,
                        delay: cat.delay,
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                    className="absolute pointer-events-none"
                    style={{
                        top: `${cat.position.top}%`,
                        left: `${cat.position.left}%`,
                        width: `${cat.size}px`,
                        height: `${cat.size}px`,
                        zIndex: 1
                    }}
                >
                    <img
                        src={cat.src}
                        alt="Floating Cat"
                        className="w-full h-full object-cover rounded-full shadow-lg"
                        style={{
                            transform: `rotate(${cat.rotation}deg)`,
                            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                        }}
                    />
                </motion.div>
            ))}

            {/* Additional strategic cat placements */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute top-1/4 left-4 w-16 h-16 pointer-events-none"
                style={{ zIndex: 1 }}
            >
                <img
                    src={catImages[0]}
                    alt="Corner Cat"
                    className="w-full h-full object-cover rounded-full shadow-lg"
                    style={{ transform: 'rotate(-15deg)' }}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute top-1/3 right-4 w-14 h-14 pointer-events-none"
                style={{ zIndex: 1 }}
            >
                <img
                    src={catImages[1]}
                    alt="Corner Cat"
                    className="w-full h-full object-cover rounded-full shadow-lg"
                    style={{ transform: 'rotate(20deg)' }}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="absolute bottom-1/4 left-6 w-12 h-12 pointer-events-none"
                style={{ zIndex: 1 }}
            >
                <img
                    src={catImages[2]}
                    alt="Corner Cat"
                    className="w-full h-full object-cover rounded-full shadow-lg"
                    style={{ transform: 'rotate(-25deg)' }}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 1, delay: 3 }}
                className="absolute bottom-1/3 right-6 w-18 h-18 pointer-events-none"
                style={{ zIndex: 1 }}
            >
                <img
                    src={catImages[3]}
                    alt="Corner Cat"
                    className="w-full h-full object-cover rounded-full shadow-lg"
                    style={{ transform: 'rotate(15deg)' }}
                />
            </motion.div>
        </div>
    );
};

export default BirthdayLetter;
