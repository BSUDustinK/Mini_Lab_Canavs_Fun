class Course {

    constructor(data) {

        this.id = data.id;
        this.uuid = data.uuid;
        this.name = data.name;

        this.course_code = data.course_code;
        this.original_name = data.original_name;
        this.workflow_state = data.workflow_state;

        this.enrollment_term_id = data.enrollment_term_id;
    }

    display() {
        console.table([
            {
                id: this.id,
                uuid: this.uuid,
                name: this.name,
                course_code: this.course_code,
                original_name: this.original_name,
                workflow_state: this.workflow_state,
                enrollment_term_id: this.enrollment_term_id
            }
        ]);
    }

    static fromJSON(json) {
        return new Course(json);
    }

    static listFromJSON(jsonArray) {
        return jsonArray.map(item => new Course(item));
    }

}

module.exports = Course;