import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import Sidenav from "../../layouts/sidenav";
import './studenthome.css';

export default function Studenthome() {

  return (
    <>
      <Sidenav />
      <div class="content">
        <div class="container">
          <center>
            <h1>GROUP DETAILS</h1>
            <p>Student</p>
            <div style={{ marginTop: '7%' }} class="row">
              <div class="col">
                <table style={{ width: '80%', height: '110%' }} class="table">
                  <thead class="thead-dark">
                    <tr style={{ textAlign: 'center' }}>
                      <th scope="col">#</th>
                      <th scope="col">Student Name</th>
                      <th scope="col">Email</th>
                    </tr>
                  </thead>
                  <br />
                  <tbody style={{ textAlign: 'center' }}>
                    <tr>
                      <th scope="row">1</th>
                      <td>Kavindu Lakshan</td>
                      <td>kavindulakshan@gmail.com</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Kavindu Lakshan</td>
                      <td>kavindulakshan@gmail.com</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Kavindu Lakshan</td>
                      <td>kavindulakshan@gmail.com</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Kavindu Lakshan</td>
                      <td>kavindulakshan@gmail.com</td>
                    </tr>
                  </tbody>
                </table>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add Member</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        ...
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </div>

            </div>
          </center>
        </div>
      </div>
    </>
  )
}