// Import necessary packages and hooks
import React,{ useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

// Define the ThemeSwitchButton component
export default function ThemeSwitchButton() {
    // Use state to track if the component is mounted
    const [mounted, setMounted] = useState(false);
    // Use the useTheme hook from next-themes to get the resolvedTheme and setTheme functions
    const { resolvedTheme, setTheme } = useTheme();

    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    // Render the component
    return (
        <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10  flex items-center justify-center hover:bg-neutral-200 hover:dark:bg-neutral-600 rounded-full transition-all"
            onClick={() =>
                // Toggle between light and dark theme
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
        >
            {/* Render the svg icon based on the resolved theme */}
            {mounted && (
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-neutral-900 dark:text-amber-400">
                    {resolvedTheme === "dark" ? (
                        // Render the icon for the dark theme
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    ) : (
                        // Render the icon for the light theme
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    )}
                </svg>
            )}
        </button>
    );
}