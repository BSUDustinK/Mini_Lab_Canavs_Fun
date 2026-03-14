class Assignment {

    constructor(data) {

        this.id = data.id;
        this.name = data.name;
        this.description = data.description;

        this.due_at = data.due_at;
        this.lock_at = data.lock_at;

        this.course_id = data.course_id;
        this.html_url = data.html_url;
    }

    display() {
        console.table([
            {
                id: this.id,
                name: this.name,
                description: this.description,

                due_at: this.due_at,
                lock_at: this.lock_at,

                course_id: this.course_id,
                html_url: this.html_url
            }
        ]);
    }

    static fromJSON(json) {
        return new Assignment(json);
    }

}

module.exports = Assignment;