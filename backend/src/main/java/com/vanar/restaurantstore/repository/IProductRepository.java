package com.vanar.restaurantstore.repository;

import com.vanar.restaurantstore.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductRepository extends JpaRepository<ProductEntity, Long> {
}
