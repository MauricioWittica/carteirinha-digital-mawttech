import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const History = ()=>{
return(
<ScrollView>
<View style={styles.container}>
    
<Text style={styles.title}> Sobre o Partido </Text>

<Text style={styles.text}>Modernidade, a preocupação com o meio ambiente e as questões sociais e trabalhistas são as metas primordiais para que possamos juntos construir um novo Brasil.</Text>
<Text></Text>
<Text style={styles.text}>O Partido Renovador Trabalhista Brasileiro – PRTB, com bandeiras conservadoras e nacionalista, acredita no potencial do País e defende menor intervenção estrangeira na economia e maior independência.</Text>
<Text></Text>
<Text style={styles.text}>O partido fundado pelo apresentador de televisão, professor universitário e publicitário, Levy Fidelix, eterno presidente nacional do PRTB, atualmente aparece no cenário político representado pelo Vice-Presidente da República, General Mourão.</Text>
<Text></Text>
<Text style={styles.text}>O PRTB, sempre defendeu pautas polêmicas em defesa da vida e da família e se prepara para em 2022, através de seus filiados, iniciar discussões sérias para a construção de uma política mais participativa e moderna.</Text>
<Text></Text>
<Text style={styles.text}>Levy que muitos anos defendeu o AEROTREM, que ligaria a cidade de Campinas, São Paulo e o Rio de Janeiro, nos deixou aos 69 anos e ensinou através de seu legado, a buscar alternativas ambiciosas para ajudar a população em suas principais demandas.</Text>
<Text></Text>
<Text style={styles.text}>O Presidente do PRTB de Sumaré, Abelardo Pinto Junior relembra que para Levy, não basta o político agir legalmente, necessita que suas ações também sejam pautadas na moral; e completa, nosso partido tem um forte apelo para a moral de seus filiados e políticos, algo que muitas vezes vem faltando à classe política. Se você possui valores éticos e gostaria de contribuir na transformação da política brasileira, você deve vir para o PRTB. </Text>
<View style={{width: 200, height: 300 , marginTop: 30}}>
<Image style={{width:'100%', height:'100%' }} source={ require('../../assets/levyfidelix-28.png')} 
/>
</View>
</View>
</ScrollView>

);
}

export default History;

const styles = StyleSheet.create({
 container:{

padding: 20,
alignItems: 'center',

},
title:{
    fontSize: 30,
    alignItems: 'center',
 
    justifyContent:'center'
},
text:{
    fontSize: 16,
}

})