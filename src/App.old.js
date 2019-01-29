<NativeRouter>


    {
       this.state.login ? (<Route path="/" name="Home" component={Shop} />) : (
         <View style={styles.container}>
            <Route exact path="/" name="Login Page" component={Login} />
            <Route exact path="/register" name="Login Page" component={Register} />

         </View>
       )
    }




</NativeRouter>
