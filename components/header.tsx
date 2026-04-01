"use client"

import type React from "react"
import { useState } from "react"
import { Menu, X, ArrowUpRight, ArrowRight, Sun, Moon, Globe } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage, type Language } from "@/contexts/language-context"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const isScrolled = true
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t, languageNames } = useLanguage()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)

    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsOpen(false)
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const languages: Language[] = ["en", "hi", "kn", "te", "ta"]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "px-4 pt-4" : ""}`}>
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 rounded-2xl ${
          isScrolled
            ? "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200 dark:border-zinc-700 px-6 py-3"
            : "bg-background/90 backdrop-blur-md px-6 py-5"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#" onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
            <svg
              className={`w-6 h-6 transition-colors duration-300 ${isScrolled ? "text-black dark:text-white" : "text-foreground"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
              <path d="M8 12a4 4 0 0 1 8 0" />
            </svg>
            <span
              className={`text-lg font-medium tracking-tight transition-colors duration-300 ${isScrolled ? "text-black dark:text-white" : "text-foreground"}`}
            >
              Smrithi
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#problem"
              onClick={(e) => handleSmoothScroll(e, "problem")}
              className={`text-sm transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.problem")}
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleSmoothScroll(e, "how-it-works")}
              className={`text-sm transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.howItWorks")}
            </a>
            <a
              href="#features"
              onClick={(e) => handleSmoothScroll(e, "features")}
              className={`text-sm transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.features")}
            </a>
            <a
              href="#integrations"
              onClick={(e) => handleSmoothScroll(e, "integrations")}
              className={`text-sm transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.integrations")}
            </a>
            <a
              href="#faq"
              onClick={(e) => handleSmoothScroll(e, "faq")}
              className={`text-sm transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.faq")}
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full border transition-all duration-300 ${
                  isScrolled 
                    ? "border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800" 
                    : "border-border hover:bg-accent"
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{languageNames[language]}</span>
              </button>
              {langMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-lg py-2 min-w-[140px]">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang)
                        setLangMenuOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors ${
                        language === lang ? "bg-zinc-100 dark:bg-zinc-700 font-medium" : ""
                      }`}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all duration-300 ${
                isScrolled 
                  ? "border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800" 
                  : "border-border hover:bg-accent"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>

            <a
              href="#waitlist"
              onClick={(e) => handleSmoothScroll(e, "waitlist")}
              className={`relative flex items-center gap-0 border rounded-full pl-5 pr-1 py-1 transition-all duration-300 group overflow-hidden ${
                isScrolled ? "border-zinc-300 dark:border-zinc-600" : "border-border"
              }`}
            >
              <span
                className={`absolute inset-0 rounded-full scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300 ${
                  isScrolled ? "bg-black dark:bg-white" : "bg-foreground"
                }`}
              />
              <span
                className={`text-sm pr-3 relative z-10 transition-colors duration-300 ${
                  isScrolled ? "text-black dark:text-white group-hover:text-white dark:group-hover:text-black" : "text-foreground group-hover:text-background"
                }`}
              >
                {t("nav.joinWaitlist")}
              </span>
              <span className="w-8 h-8 rounded-full flex items-center justify-center relative z-10">
                <ArrowRight
                  className={`w-4 h-4 group-hover:opacity-0 absolute transition-opacity duration-300 ${
                    isScrolled ? "text-black dark:text-white" : "text-foreground"
                  }`}
                />
                <ArrowUpRight
                  className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    isScrolled ? "text-black dark:text-white group-hover:text-white dark:group-hover:text-black" : "text-foreground group-hover:text-background"
                  }`}
                />
              </span>
            </a>
          </div>

          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="p-2 rounded-full border border-zinc-300 dark:border-zinc-600"
              >
                <Globe className="w-4 h-4" />
              </button>
              {langMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-lg py-2 min-w-[140px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang)
                        setLangMenuOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors ${
                        language === lang ? "bg-zinc-100 dark:bg-zinc-700 font-medium" : ""
                      }`}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-zinc-300 dark:border-zinc-600"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>

            <button
              className={`transition-colors duration-300 ${isScrolled ? "text-black dark:text-white" : "text-foreground"}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav
            className={`md:hidden mt-6 pb-6 flex flex-col gap-4 border-t pt-6 ${
              isScrolled ? "border-zinc-200 dark:border-zinc-700" : "border-border"
            }`}
          >
            <a
              href="#problem"
              onClick={(e) => handleSmoothScroll(e, "problem")}
              className={`transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.problem")}
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleSmoothScroll(e, "how-it-works")}
              className={`transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.howItWorks")}
            </a>
            <a
              href="#features"
              onClick={(e) => handleSmoothScroll(e, "features")}
              className={`transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.features")}
            </a>
            <a
              href="#integrations"
              onClick={(e) => handleSmoothScroll(e, "integrations")}
              className={`transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.integrations")}
            </a>
            <a
              href="#faq"
              onClick={(e) => handleSmoothScroll(e, "faq")}
              className={`transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.faq")}
            </a>
            <div
              className={`flex flex-col gap-3 mt-4 pt-4 border-t ${isScrolled ? "border-zinc-200 dark:border-zinc-700" : "border-border"}`}
            >
              <a
                href="#waitlist"
                onClick={(e) => handleSmoothScroll(e, "waitlist")}
                className={`relative flex items-center gap-0 border rounded-full pl-5 pr-1 py-1 w-fit transition-all duration-300 group overflow-hidden ${
                  isScrolled ? "border-zinc-300 dark:border-zinc-600" : "border-border"
                }`}
              >
                <span
                  className={`absolute inset-0 rounded-full scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300 ${
                    isScrolled ? "bg-black dark:bg-white" : "bg-foreground"
                  }`}
                />
                <span
                  className={`text-sm pr-3 relative z-10 transition-colors duration-300 ${
                    isScrolled ? "text-black dark:text-white group-hover:text-white dark:group-hover:text-black" : "text-foreground group-hover:text-background"
                  }`}
                >
                  {t("nav.joinWaitlist")}
                </span>
                <span className="w-8 h-8 rounded-full flex items-center justify-center relative z-10">
                  <ArrowRight
                    className={`w-4 h-4 group-hover:opacity-0 absolute transition-opacity duration-300 ${
                      isScrolled ? "text-black dark:text-white" : "text-foreground"
                    }`}
                  />
                  <ArrowUpRight
                    className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                      isScrolled ? "text-black dark:text-white group-hover:text-white dark:group-hover:text-black" : "text-foreground group-hover:text-background"
                    }`}
                  />
                </span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
