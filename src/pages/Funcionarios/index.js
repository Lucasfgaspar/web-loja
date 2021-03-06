import React from 'react';

import { MdPersonAdd, MdDeleteForever } from 'react-icons/md';
import { FaSearch, FaPen } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';

import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';

import { Container, Content, TableContainer } from './styles';

function Funcionarios() {
  return (
    <>
      <Container>
        <NavabarLeft />
        <Content>
          <Header titlePage="Funcionários" />
          <main className="main">
            <button type="button">
              <MdPersonAdd size={20} color="#515151" />
              Adicionar Funcionários
            </button>
            <div className="box-search">
              <header>
                <div>
                  <MdPersonAdd size={15} color="#515151" />
                </div>
                <span>Funcionários</span>
              </header>
              <div className="search">
                <div>
                  <FaSearch size={15} color="#515151" />
                  <input type="text" placeholder="Buscar Funcionarios" />
                </div>
              </div>
            </div>
            <TableContainer striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Cod.</th>
                  <th>Nome do Funcionário</th>
                  <th>Cargo</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Caixa</td>
                  <td>Ativo</td>
                  <td className="actions">
                    <div>
                      <button type="button">
                        <AiFillEye size={12} color="#000" />
                      </button>
                      <button type="button">
                        <FaPen size={12} color="#000" />
                      </button>
                      <button type="button">
                        <MdDeleteForever size={12} color="#000" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </TableContainer>
          </main>
        </Content>
      </Container>
    </>
  );
}

export default Funcionarios;
