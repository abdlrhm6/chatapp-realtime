export default function BgPattern(){
    return (
        <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
 
         <defs>
            <pattern id="auth-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="8" fill="#4B5563" />
              <path d="M50 10 L90 10 L70 30 Z" fill="#4B5563" />
              <rect x="70" y="60" width="30" height="30" rx="5" fill="#4B5563" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#auth-pattern)" />
        </svg>
      </div>
    )
}