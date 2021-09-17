export async function getServerSideProps (context) {
    const {id} = context.query
    return {props: {id}}
}
