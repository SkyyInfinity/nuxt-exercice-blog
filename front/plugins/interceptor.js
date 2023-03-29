export default (ctx) => {
    ctx.$axios.onError((error) => {
        const message = error.response && error.response.data && error.response.data.message;
        const code = parseInt(error.response && error.response.status);
        if (code === 401) {
            ctx.redirect('/');
        } else {
            throw new Error(message);
        }
    })
}
