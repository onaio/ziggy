if (typeof enketo == "undefined" || !enketo) {
    var enketo = {};
}

enketo.FormDataRepository = function () {
    var repository = window.formDataRepositoryContext;

    return {
        getFormInstanceByFormTypeAndId: function (formID, formName) {
            return null;
        },
        queryUniqueResult: function (sql) {
            return repository.queryUniqueResult(sql);
        },
        queryList: function (sql) {
            return repository.queryList(sql);
        },
        saveFormSubmission: function (params, data) {
            repository.saveFormSubmission(params, data);
        },
        saveEntity: function (entityType, entity) {
            return repository.saveEntity(entityType, entity);
        }
    };
};