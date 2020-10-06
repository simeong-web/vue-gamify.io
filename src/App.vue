<template>
  <div id="app">
    <Header />
    <router-view :games="games"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  data() {
    return {
        games: [
            {id: '1', src: 'placeholder-1.jpg', title: 'World of Warcraft', count: '18.320', likes: '9.540', dislikes: '3.543', rating: '95%'},
            {id: '2', src: 'placeholder-1.jpg', title: 'World of Warcraft', count: '13.500', likes: '17.540', dislikes: '5.637', rating: '91%'},
            {id: '3', src: 'placeholder-1.jpg', title: 'World of Warcraft', count: '9.101', likes: '5.540', dislikes: '1.143', rating: '93%'},
            {id: '4', src: 'placeholder-1.jpg', title: 'World of Warcraft', count: '11.213', likes: '5.540', dislikes: '1.143', rating: '97%'},
            {id: '5', src: 'placeholder-1.jpg', title: 'World of Warcraft', count: '5.644', likes: '10.540', dislikes: '5.143', rating: '92%'},
            {id: '6', src: 'placeholder-1.jpg', title: 'World of Warcraft', count: '10.089', likes: '13.540', dislikes: '1.143', rating: '89%'},
            {id: '7', src: 'placeholder-1.jpg', title: 'World of Warcraft', count: '14.903', likes: '22.540', dislikes: '3.143', rating: '94%'},
            {id: '8', src: 'placeholder-1.jpg', title: 'World of Warcraft', count: '11.341', likes: '7.540', dislikes: '2.143', rating: '90%'}
        ]
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>