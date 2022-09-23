import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ "message" ]
    initialize() {
        this.disappearElementDelayed()
    }
    disappearElementDelayed() {
        setTimeout(() => {
            this.messageTarget.remove()
        }, 2000)
    }
}
