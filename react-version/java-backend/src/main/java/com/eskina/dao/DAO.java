package com.eskina.dao;

import java.sql.SQLException;
import java.util.List;

public interface DAO<T> {
    T create(T t) throws SQLException;
    T read(long id) throws SQLException;
    T update(T t) throws SQLException;
    void delete(long id) throws SQLException;
    List<T> list() throws SQLException;
}