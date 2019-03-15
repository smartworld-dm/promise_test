function registerMember(url) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
	    resolve('foo');
	}, 300);
	setTimeout(function() {
	    reject('foo');
	}, 200);
  });
}

class Main {

	onRegistrationSuccess (email) {
        console.log('Log - onRegistrationSuccess: ', email);
    };

    onError (error) {
        console.log('Log - onError: ', error);
    };

    Call (input) {
        return registerMember(input)
            .then((res) => {
                this.onRegistrationSuccess('Email0');
            })
            .catch((error) => {
                this.onError('Error0');
            });
    }
};

let main = new Main();
main.Call('AAA');