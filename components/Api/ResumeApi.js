import {Api} from "@/components/Api/Api";

class ResumeApi extends Api {
    static async postResume(data) {
        return this.post(`http://localhost:8888/JSBack/public/api/cv/add`, data);
    }

    static async editResume(id, data) {
        return this.post(`http://localhost:8888/JSBack/public/api/cv/${id}/edit`, data);
    }

    static async editResumeStatus(id, data) {
        return this.post(`http://localhost:8888/JSBack/public/api/cv/${id}/status/update`, data);
    }

    static async getResume(id) {
        return this.get(`http://localhost:8888/JSBack/public/api/cv/${id}`);
    }

    static async getResumeList() {
        return this.get(`http://localhost:8888/JSBack/public/api/cv`);
    }
}

export { ResumeApi };