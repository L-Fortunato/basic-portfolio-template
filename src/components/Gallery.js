import React, { Component } from 'react'
import GalleryItem from './GalleryItem'



export class Gallery extends Component {
    state = {
        Items : [
            {
                id: 1,
                title: 'Lorem ipsum',
                description: `dolor sit amet consectetur, adipisicing elit. Suscipit doloribus odit sapiente ea vel pariatur dolor!
                        Repellat harum voluptas corporis, pariatur sapiente accusantium distinctio laborum, ipsam quod fugit,
                        porro numquam?`,
                imgFile: "https://cdn.pixabay.com/photo/2016/02/19/11/19/computer-1209641_960_720.jpg"
            },
            {
                id: 2,
                title: 'Lorem ipsum',
                description: `dolor sit amet consectetur, adipisicing elit. Suscipit doloribus odit sapiente ea vel pariatur dolor!
                        Repellat harum voluptas corporis, pariatur sapiente accusantium distinctio laborum, ipsam quod fugit,
                        porro numquam?`,
                imgFile: "https://cdn.pixabay.com/photo/2016/02/19/11/19/computer-1209641_960_720.jpg"
            },
            {
                id: 3,
                title: 'Lorem ipsum',
                description: `dolor sit amet consectetur, adipisicing elit. Suscipit doloribus odit sapiente ea vel pariatur dolor!
                        Repellat harum voluptas corporis, pariatur sapiente accusantium distinctio laborum, ipsam quod fugit,
                        porro numquam?`,
                imgFile: "https://cdn.pixabay.com/photo/2016/02/19/11/19/computer-1209641_960_720.jpg"
            },
            {
                id: 4,
                title: 'Lorem ipsum',
                description: `dolor sit amet consectetur, adipisicing elit. Suscipit doloribus odit sapiente ea vel pariatur dolor!
                        Repellat harum voluptas corporis, pariatur sapiente accusantium distinctio laborum, ipsam quod fugit,
                        porro numquam?`,
                imgFile: "https://cdn.pixabay.com/photo/2016/02/19/11/19/computer-1209641_960_720.jpg"
            },
            {
                id: 5,
                title: 'Lorem ipsum',
                description: `dolor sit amet consectetur, adipisicing elit. Suscipit doloribus odit sapiente ea vel pariatur dolor!
                        Repellat harum voluptas corporis, pariatur sapiente accusantium distinctio laborum, ipsam quod fugit,
                        porro numquam?`,
                imgFile: "https://cdn.pixabay.com/photo/2016/02/19/11/19/computer-1209641_960_720.jpg"
            },
            {
                id: 6,
                title: 'Lorem ipsum',
                description: `dolor sit amet consectetur, adipisicing elit. Suscipit doloribus odit sapiente ea vel pariatur dolor!
                        Repellat harum voluptas corporis, pariatur sapiente accusantium distinctio laborum, ipsam quod fugit,
                        porro numquam?`,
                imgFile: "https://cdn.pixabay.com/photo/2016/02/19/11/19/computer-1209641_960_720.jpg"
            },
            {
                id: 7,
                title: 'Lorem ipsum',
                description: `dolor sit amet consectetur, adipisicing elit. Suscipit doloribus odit sapiente ea vel pariatur dolor!
                        Repellat harum voluptas corporis, pariatur sapiente accusantium distinctio laborum, ipsam quod fugit,
                        porro numquam?`,
                imgFile: "https://cdn.pixabay.com/photo/2016/02/19/11/19/computer-1209641_960_720.jpg"
            },
            {
                id: 8,
                title: 'Lorem ipsum',
                description: `dolor sit amet consectetur, adipisicing elit. Suscipit doloribus odit sapiente ea vel pariatur dolor!
                        Repellat harum voluptas corporis, pariatur sapiente accusantium distinctio laborum, ipsam quod fugit,
                        porro numquam?`,
                imgFile: "https://cdn.pixabay.com/photo/2016/02/19/11/19/computer-1209641_960_720.jpg"
            },
            {
                id: 9,
                title: 'Lorem ipsum',
                description: `dolor sit amet consectetur, adipisicing elit. Suscipit doloribus odit sapiente ea vel pariatur dolor!
                        Repellat harum voluptas corporis, pariatur sapiente accusantium distinctio laborum, ipsam quod fugit,
                        porro numquam?`,
                imgFile: "https://cdn.pixabay.com/photo/2016/02/19/11/19/computer-1209641_960_720.jpg"
            },
            {
                id: 10,
                title: 'Lorem ipsum',
                description: `dolor sit amet consectetur, adipisicing elit. Suscipit doloribus odit sapiente ea vel pariatur dolor!
                        Repellat harum voluptas corporis, pariatur sapiente accusantium distinctio laborum, ipsam quod fugit,
                        porro numquam?`,
                imgFile: "https://cdn.pixabay.com/photo/2016/02/19/11/19/computer-1209641_960_720.jpg"
            },
            {
                id: 11,
                title: 'Lorem ipsum',
                description: `dolor sit amet consectetur, adipisicing elit. Suscipit doloribus odit sapiente ea vel pariatur dolor!
                        Repellat harum voluptas corporis, pariatur sapiente accusantium distinctio laborum, ipsam quod fugit,
                        porro numquam?`,
                imgFile: "https://cdn.pixabay.com/photo/2016/02/19/11/19/computer-1209641_960_720.jpg"
            },
            {
                id: 12,
                title: 'Lorem ipsum',
                description: `dolor sit amet consectetur, adipisicing elit. Suscipit doloribus odit sapiente ea vel pariatur dolor!
                        Repellat harum voluptas corporis, pariatur sapiente accusantium distinctio laborum, ipsam quod fugit,
                        porro numquam?`,
                imgFile: "https://cdn.pixabay.com/photo/2016/02/19/11/19/computer-1209641_960_720.jpg"
            },

        ]
    }

    render() {
        return (
            <div className="gallery" id="gallery">
                {this.state.Items.map(item =>(
                    <GalleryItem key={item.id} work={item}/>
                ))}
            </div>
        )
    }
}

export default GalleryItem
