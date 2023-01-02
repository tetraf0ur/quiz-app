import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const ErrorPage = () => {
    return (
        <CustomErrorPage>
            <div className="page_container content">
                <img src="/images/primary/404.png" alt="" />
                <h3>Уупсс... Страница не найдена</h3>
                <p className='text'>
                    была перенесена или удалена.
                    <br />
                    Проверьте правильность введенной Вами ссылки и повторите
                    попытку
                </p>
                <Link href="/" className='link'>На главную</Link>
            </div>
        </CustomErrorPage>
    )
}

export default ErrorPage

const CustomErrorPage = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    .content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    .content img {
        max-width: 486px;
        margin: 0 auto 34px;
    }
    h3 {
        margin: 0 0 25px;
        font-size: 32px;
        font-weight: 500;
    }
    p.text {
        margin-bottom: 25px;
        line-height: 165%;
        font-size: 18px;
        font-weight: 300;
    }
    a.link {
        border: 1px solid var(--orange);
        height: 42px;
        max-width: 255px;
        width: 100%;
        background: transparent;
        filter: drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.25));
        border-radius: 5px;
        font-weight: 300;
        font-size: 18px;
        margin: 0 auto;
        cursor: pointer;
        display: grid;
        place-content: center;
    }
    @media screen and (max-width: 768px) {
        height: 100vh;
        a {
            max-width: 100%;

        }
        img {
            width: 100%;
            margin-bottom: 38px;
            max-width: 335px;
        }
        .page_container {
            padding: 0 20px;
            margin: 0 auto;
        }
        br {
            display: none;
        }
        p {
            font-size: 14px;
            margin-bottom: 15px;
        }
        h3 { 
            margin-bottom: 15px;
            font-size: 18px;
        }
    }
`
