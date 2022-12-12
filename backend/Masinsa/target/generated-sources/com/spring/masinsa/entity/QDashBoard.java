package com.spring.masinsa.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QDashBoard is a Querydsl query type for DashBoard
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QDashBoard extends EntityPathBase<DashBoard> {

    private static final long serialVersionUID = -155640647L;

    public static final QDashBoard dashBoard = new QDashBoard("dashBoard");

    public final NumberPath<Long> connectionCount = createNumber("connectionCount", Long.class);

    public final DateTimePath<java.time.LocalDateTime> date = createDateTime("date", java.time.LocalDateTime.class);

    public final NumberPath<Long> loginCount = createNumber("loginCount", Long.class);

    public QDashBoard(String variable) {
        super(DashBoard.class, forVariable(variable));
    }

    public QDashBoard(Path<? extends DashBoard> path) {
        super(path.getType(), path.getMetadata());
    }

    public QDashBoard(PathMetadata metadata) {
        super(DashBoard.class, metadata);
    }

}

