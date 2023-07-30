import axios from "axios";
import dummyModel from "../models/Dummy";

class DummyService {
  http = axios.create({
    baseURL: "http://localhost:5272/",
  });

  async get() {
    var res = await this.http.get<dummyModel>("dummy");
    return res.data;
    //response: dummyModel = await fetch('dummy');
    //return (await response.json());

    // var resu = await axios.get<dummyModel>("dummy");
    // return resu.data;
    //var result = await fetch("dummy");
    //return result.json();
  }
}

export default new DummyService();
