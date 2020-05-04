import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container, ImageBackground, List, TitleBar } from '../styles'

import commonStyles from '../commonStyles'
import todayImage from '../../assets/imgs/today.jpg'

import moment from 'moment'
import 'moment/locale/pt-br'

import Task from '../components/Task'

const TaskList = () => {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

    return (
        <Container>
            <ImageBackground source={todayImage}>
                <TitleBar>
                    <Text style={styles.title}>Hoje</Text>
                    <Text style={styles.subtitle}>{today}</Text>
                </TitleBar>
            </ImageBackground>
            <List>
                <Task desc="Comprar Livro" estimateAt={new Date()}
                    doneAt={new Date()}/>
                <Task desc="Ler Livro" estimateAt={new Date()}
                    doneAt={null}/>
            </List> 
        </Container>
    )
}

export default TaskList

const styles = StyleSheet.create({
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    }
})