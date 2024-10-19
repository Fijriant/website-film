import React from "react";

const About: React.FC = () => {
    return (
        <div className="about">
            <div className="about-container ratio ratio-16x9 bg-dark text-white mt-5">
                <h2 className="text-center mb-4">Tentang Raja Movie</h2>
                <div className="row">
                    <div className="about-container1 col-md-8 mx-auto mt-5">
                        <p className="text-center">
                            Raja Movie adalah platform daftar nonton film yang memudahkan Anda untuk menemukan dan melacak film-film favorit Anda. Kami menyediakan informasi terbaru tentang film-film terbaru, klasik, dan yang akan datang.
                        </p>
                        <p className="text-center">
                            Fitur utama kami:
                        </p>
                        <ul className="text-center">
                            <li className="list-group-item">Pencarian film yang mudah</li>
                            <li className="list-group-item">Daftar film yang ingin ditonton</li>
                            <li className="list-group-item">Ulasan dan peringkat film</li>
                            <li className="list-group-item">Rekomendasi film berdasarkan preferensi Anda</li>
                        </ul>
                        <p className="text-center mt-4">
                            Mulai jelajahi dunia perfilman bersama Raja Movie sekarang!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
