import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Container, ImageBackground, List, TitleBar } from '../styles'

import commonStyles from '../commonStyles'
import todayImage from '../../assets/imgs/today.jpg'

import moment from 'moment'
import 'moment/locale/pt-br'

import Task from '../components/Task'

export default class TaskList extends Component {

    state = {
        tasks: [{
            id: Math.random(),
            desc: 'Comprar Livro de React Native',
            estimateAt: new Date(),
            doneAt: new Date(),
        }, {
            id: Math.random(),
            desc: 'Ler Livro de React Native',
            estimateAt: new Date(),
            doneAt: null,
        }]
    }
    
    toggleTask = taskId => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if(task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date()
            }
        })

        this.setState({ tasks })
    }

    render() {
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
                <FlatList data={this.state.tasks} // Passa como parâmetro/atributo a lista de objetos JavaScripts puro
                    keyExtractor={item => `${item.id}`} // Pega o id de cada objeto de forma correta para a renderização
                    renderItem={({item}) => <Task {...item} toggleTask={this.toggleTask} />} /* Recebe o Item (desestruturado do objeto) e passa cada um dos atributos para Task usando o operador Spread */ /> 
            </List> 
        </Container>
        )
    }
}

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