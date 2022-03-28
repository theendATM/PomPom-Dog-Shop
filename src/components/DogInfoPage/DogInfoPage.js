import React from 'react';
import style from './DogInfoPage.module.css';
import returnBackIcon from '../../assets/arrow_back.svg';
import dogProfilePic from '../../assets/dogProfilePic.png';
import { Button, DogInfoBox } from '../';

export const DogInfoPage = () => {

    const dogPictureStyle = {
        background: `url(${dogProfilePic}) no-repeat center`,
        backgroundSize: 'cover'
    }

    return (
        <div className={style.dogInfoPage}>
            <div className={style.returnBack}>
                <a className={style.returnBackButton} href=''>
                    <img src={returnBackIcon} alt='returnBackIcon'/>
                    <p>Назад</p>
                </a>
            </div>
            <div>
                <div className={style.dogInfo}>
                    <div className={style.dogPicture} style={dogPictureStyle}>
                        <div className={style.dogPictureButtons}>
                            <a href=''></a>
                            <a href=''></a>
                            <a href=''></a>
                            <a href=''></a>
                        </div>
                    </div>
                    <div className={style.dogProfile}>
                        <div className={style.dogMainInfo}>
                            <div className={style.infoBox}>
                                <div className={style.dogText}>
                                    <p className={style.dogName}>Самоед щенок</p>
                                    <p className={style.dogDescription}>Дружелюбная, веселая, добрая к другим собакам и детям</p>
                                </div>
                                <div className={style.dogTextBottom}>
                                    <p className={style.dogPrice}>40 000 ₽</p>
                                    <Button  text='Записаться на просмотр' fontSize={20} isBorder={true}/>
                                </div>
                            </div>
                        </div>
                        <div className={style.addInfo}>
                            <p>Дополнительная информация:</p>
                            <p className={style.addInfoText}>Размер взрослой собаки: 50-60см, шерсть гипоаллегренная</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.dogParams}>
                <DogInfoBox title='Порода' info='Самоед'/>
                <DogInfoBox title='Пол' info='Женский'/>
                <DogInfoBox title='Возраст' info='4 месяца'/>
                <DogInfoBox title='Окрас' info='Белый'/>
                <DogInfoBox title='Длина шерсти' info='Длинная'/>
                <DogInfoBox title='Размер' info='30 см'/>
                <DogInfoBox title='Вес' info='25 кг'/>
            </div>
            <div className={style.dogHistory}>
                <Button text='Посмотреть родословную' fontSize={16}/>
                <Button text='Вакцинация' fontSize={16}/>
            </div>
            <div className={style.reccomendations}>
                <div className={style.sepLine}></div>
                <div className={style.similar}>
                    <p>Похожие объявления</p>
                    <div className={style.dogShowcase}></div>
                </div>
                <div className={style.watched}>
                    <p>Уже просмотренные</p>
                    <div className={style.dogShowcase}></div>
                </div>
            </div>
        </div>
    )
}