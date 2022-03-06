import React from 'react';
import CardsBlogs from '../../Components/Cards-Blog/CardsBlog';
import './ReadOurBlog.css';
import Carousel from 'react-grid-carousel';

const ReadOurBlog = () => {

    const AllBlogs = [
        {id: 1, title: 'Quick-start guide to nuts and seeds', 
        image:'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com//content/26/46/eee759584a0db29e2b22befa0b21/nuts-and-seeds._TTW_._CR1,0,2278,1282_._SR1500,844_._QL100_.jpg',
        imageId: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpSNyhAnMOKvwCEKlcAHvGtlY66rTVSPjZQ&usqp=CAU',
        author: 'Kevin Ibrahim'},
        {id: 2, title: 'Nutrition: Tips for Improving your Health', 
        image: 'https://familydoctor.org/wp-content/uploads/2016/11/shutterstock_428520082-e1483753409744.jpg',
        imageId: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpSNyhAnMOKvwCEKlcAHvGtlY66rTVSPjZQ&usqp=CAU',
        author: 'Mike Jackson'},
        {id: 3, title: 'The Top 10 benefits of eating healthy', 
        image: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528',
        imageId: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpSNyhAnMOKvwCEKlcAHvGtlY66rTVSPjZQ&usqp=CAU',
        author: 'Bryan MacGregor'},
        {id: 4, title: 'What most important about healthy habits? ', 
        image: 'https://miro.medium.com/max/560/1*HIbkNH6LwC7X6JQ8c5RIlQ.jpeg',
        imageId: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpSNyhAnMOKvwCEKlcAHvGtlY66rTVSPjZQ&usqp=CAU',
        author: 'Jason Moon'},
        {id: 5, title: 'Quick-start guide to nuts and seeds', 
        image:'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com//content/26/46/eee759584a0db29e2b22befa0b21/nuts-and-seeds._TTW_._CR1,0,2278,1282_._SR1500,844_._QL100_.jpg',
        imageId: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpSNyhAnMOKvwCEKlcAHvGtlY66rTVSPjZQ&usqp=CAU',
        author: 'Kevin Ibrahim'},
        {id: 6, title: 'Nutrition: Tips for Improving your Health', 
        image: 'https://familydoctor.org/wp-content/uploads/2016/11/shutterstock_428520082-e1483753409744.jpg',
        imageId: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpSNyhAnMOKvwCEKlcAHvGtlY66rTVSPjZQ&usqp=CAU',
        author: 'Mike Jackson'},
        {id: 7, title: 'The Top 10 benefits of eating healthy', 
        image: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528',
        imageId: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpSNyhAnMOKvwCEKlcAHvGtlY66rTVSPjZQ&usqp=CAU',
        author: 'Bryan MacGregor'},
        {id: 8, title: 'What most important about healthy habits? ', 
        image: 'https://miro.medium.com/max/560/1*HIbkNH6LwC7X6JQ8c5RIlQ.jpeg',
        imageId: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpSNyhAnMOKvwCEKlcAHvGtlY66rTVSPjZQ&usqp=CAU',
        author: 'Jason Moon'},
        {id: 9, title: 'Quick-start guide to nuts and seeds', 
        image:'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com//content/26/46/eee759584a0db29e2b22befa0b21/nuts-and-seeds._TTW_._CR1,0,2278,1282_._SR1500,844_._QL100_.jpg',
        imageId: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpSNyhAnMOKvwCEKlcAHvGtlY66rTVSPjZQ&usqp=CAU',
        author: 'Kevin Ibrahim'},
        {id: 10, title: 'Nutrition: Tips for Improving your Health', 
        image: 'https://familydoctor.org/wp-content/uploads/2016/11/shutterstock_428520082-e1483753409744.jpg',
        imageId: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpSNyhAnMOKvwCEKlcAHvGtlY66rTVSPjZQ&usqp=CAU',
        author: 'Mike Jackson'}]

    return (
        <div className='ReadOurBlog'>
            <div className='ReadOurBlog-header'>
            <h2>Read Our Blog</h2>
            </div>
            <div className='ReadOurBlog-text'>
            <h3>Far far away, behind the word mountains, far from the countries
                <br />
            Vokalia and Consonantia, there live the blind texts.</h3>
            </div>
            
            <Carousel
            cols={4}
            rows={1}
            gap={11}
            responsiveLayout={[
                {
                breakpoint: 1200,
                cols: 3
                },
                {
                breakpoint: 990,
                cols: 2
                }
            ]}
            mobileBreakpoint={670}
            containerStyle={{ background: 'transparent' }}
            >
                {AllBlogs.map((blog, i) => { 
                return( 
        <Carousel.Item key={i}>
            <div className='ReadOurBlog-card'>
                <CardsBlogs  image={blog.image} title={blog.title} imageId={blog.imageId} author={blog.author}  /> 
            </div>
            </Carousel.Item>)})}
            </Carousel>
        </div>
    )
}

export default ReadOurBlog;