'use client'

import React from 'react'
import Link from 'next/link'

const Footer = () => {
        const currentYear = new Date().getFullYear()

        return (
                <footer className='bg-[var(--primary)] text-white py-8'>
                        <div className='container mx-auto px-4'>
                                <div className='flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4'>
                                        <p className='text-sm md:max-w-md'>
                                                Мы не передаём ваши контакты третьим лицам. Отправляя данные, вы соглашаетесь с обработкой персональных данных.
                                        </p>
                                        <div className='flex gap-6 text-sm'>
                                                <Link href='/privacy-policy' className='hover:underline'>
                                                        Политика конфиденциальности
                                                </Link>
                                                <Link href='/terms' className='hover:underline'>
                                                        Пользовательское соглашение
                                                </Link>
                                        </div>
                                </div>
                                <p className='mt-6 text-sm text-gray-400 text-center'>© {currentYear} От 0 до 1</p>
                        </div>
                </footer>
        )
}

export default Footer

