import styles from '../styles/Home.module.css'
import MyHead from '../../components/MyHead'
import MyHeader from '../../components/MyHeader'
import PrBody from '../../components/PrBody'
import MyFooter from '../../components/MyFooter'
import Link from 'next/link'

export default function Proj(){
    return(
        <div>
            <main>
                <MyHead />
                <MyHeader />
                <PrBody />
                <MyFooter />
            </main>
        </div>
    )
}