import { navLinks, owner } from '../data/portfolio'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center pt-4 sm:pt-6 px-4 sm:px-8 gap-2 sm:gap-3">
      <div
        className="flex items-center justify-center rounded-full w-10 h-10 sm:w-11 sm:h-11 shrink-0"
        style={{ backgroundColor: '#EDEDED' }}
        aria-label={owner.name}
      >
        <svg width="18" height="18" viewBox="0 0 256 256" fill="none">
          <path
            fill="rgb(84, 84, 84)"
            d="M 160 88
L 194 34
L 216 0
L 256 0
L 256 40
L 221.5 93.5
L 200 128
L 256 128
L 256 256
L 96 256
L 96 168
L 64.246 220
L 40 256
L 0 256
L 0 216
L 34 162
L 56 128
L 0 128
L 0 0
L 160 0
Z"
          />
        </svg>
      </div>

      <div
        className="flex items-center gap-4 sm:gap-10 rounded-xl px-4 sm:px-8 py-2.5 sm:py-3"
        style={{ backgroundColor: '#EDEDED' }}
      >
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[12px] sm:text-[14px] font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  )
}
