class Rent {

    numberOfMovies = 0
    bill = 0
    
    initialize() {
        const input = require("prompt-sync")
        const prompt = input()
        console.log("Hello there! Glad to have you here today. Please enter your name below ")
        let name = prompt("")
        console.log("Nice to have you " + name + " Welcome to Michaelzy's cinema! ")
        this.rentMovie()

    }

    rentMovie() {
        const input = require("prompt-sync")
        const prompt = input()
        console.log("Please select an option from the categories below to rent:")
        console.log("1.) Action   2.) Romance   3.) Comedy")
        let category = prompt("Please enter '1', '2', or '3':  ")

        if (category === "1") {
            this.actionMovie(prompt)
        }else if(category === "2") {
            this.romanceMovie(prompt)
        }else if(category === "3") {
            this.comedyMovie(prompt)
        }else {
            console.log("Invalid input! Please start again.")
        }
    }

    actionMovie(prompt) {
        console.log("Please select one of the following action movies: ")
            console.log("1.) Aquaman ($10)   2.) Fast & Furious ($10)   3.) Mission Impossible ($10)")
            let movie = prompt("")
            if (movie === "1") {
                console.log("Aquaman has been added to your cart!")
                this.numberOfMovies += 1
                this.bill += 10
                this.exit()
            } else if(movie === "2"){
                console.log("Fast & Furious has been added to your cart!")
                this.numberOfMovies += 1
                this.bill += 10
                this.exit()
            } else if(movie === "3") {
                console.log("Mission Impossible has been added to your cart!")
                this.numberOfMovies += 1
                this.bill += 10
                this.exit()
            } else {
                console.log("Invalid input! Please start again.")
            }
    }

    romanceMovie(prompt) {
        console.log("Please select one of the following romantic movies: ")
            console.log("1.) Barbie ($8)   2.) You & I ($8)   3.) Friends with Benefits ($5)")
            let movie = prompt("")
            if (movie === "1") {
                console.log("Barbie has been added to your cart!")
                this.numberOfMovies += 1
                this.bill += 8
                this.exit()
            } else if(movie === "2"){
                console.log("You & I has been added to your cart!")
                this.numberOfMovies += 1
                this.bill += 8
                this.exit()
            } else if(movie === "3") {
                console.log("Friends with benefits has been added to your cart!")
                this.numberOfMovies += 1
                this.bill += 8
                this.exit()
            }else {
                console.log("Invalid input! Please start again.")
            }
    }

    comedyMovie(prompt) {
        console.log("Please select one of the following comedy movies: ")
            console.log("1.) Old Dads ($5)   2.) Bottoms ($10)   3.) Three Idiots ($5)")
            let movie = prompt("")
            if (movie === "1") {
                console.log("Old Dads has been added to your cart!")
                this.numberOfMovies += 1
                this.bill += 5
                this.exit()
            } else if(movie === "2"){
                console.log("Bottoms has been added to your cart!")
                this.numberOfMovies += 1
                this.bill += 10
                this.exit()
            } else if(movie === "3") {
                console.log("Three Idiots has been added to your cart!")
                this.numberOfMovies += 1
                this.bill += 5
                this.exit()
            }else {
                console.log("Invalid input! Please start again.")
            }
    }

    exit() {
        const input = require("prompt-sync")
        const prompt = input()
        console.log("Would you like to: ")
        console.log("1.) Checkout and rent   2.) Add another movie for rent")
        let selection = prompt("")
        if(selection === "1") {
            console.log("You have selected a total of " + this.numberOfMovies + " movies for an amount of $" + this.bill + ". Please remember to return them within 7 days or a $100 penalty fee will be added per week")
        } else if(selection === "2") {
            this.rentMovie()
        }
    }


}
const logger = new Rent;
logger.initialize();