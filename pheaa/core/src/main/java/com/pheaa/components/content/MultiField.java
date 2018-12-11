package com.pheaa.components.content;


import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

@Model(adaptables=Resource.class)
public class MultiField {

    @Inject
    @Optional
    public Resource fieldsets;
}