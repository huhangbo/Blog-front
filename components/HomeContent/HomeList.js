import HomeItem from "../HomeItem/HomeItem";

export default function  HomeList (props) {
    const {articles} = props
    return (
        <div className="home-list">
            {
                articles.map(item => {
                    return (
                        <HomeItem key = {item.article_id} article = {item} title={props.title}/>
                    )
                })
            }
        </div>
    )
}
