import MagneticWrapper from "@/components/animations/MagneticWrapper";

export default function Footer() {
    const socials = [
        { name: "X", url: "https://x.com/PedroPetenon" },
        { name: "Instagram", url: "https://www.instagram.com/pedropetenon" },
        { name: "Discord", url: "https://discord.gg/M6WEHmUkYx" },
        { name: "WhatsApp", url: "https://wa.me/5519998689239" },
        { name: "Spotify playlist", url: "https://open.spotify.com/playlist/50HcM19ViHEA0vhBT57jz0?si=c9ff3aa07cf84493" },
        { name: "GitHub", url: "https://github.com/pedropetenon" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/pedro-petenon-b81371328/" },
    ];

    return (
        <footer className="fixed bottom-0 z-50 flex w-full flex-col sm:flex-row items-start sm:items-center justify-between p-6 text-sm font-medium tracking-tight mix-blend-difference text-white gap-6">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {socials.map((social) => (
                    <MagneticWrapper key={social.name}>
                        <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-75 transition-opacity"
                        >
                            {social.name}
                        </a>
                    </MagneticWrapper>
                ))}
            </div>

            <div>
                <MagneticWrapper>
                    <a
                        href="mailto:pedrogpetenon@gmail.com"
                        className="hover:opacity-75 transition-opacity block"
                    >
                        pedrogpetenon@gmail.com
                    </a>
                </MagneticWrapper>
            </div>
        </footer>
    );
}
