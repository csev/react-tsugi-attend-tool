<?php

$REGISTER_LTI2 = array(
"name" => "React Tsugi Base",
"FontAwesome" => "fa-atom",
"short_name" => "React Tool",
"description" => "This is a simple React tool.",
    // By default, accept launch messages..
    "messages" => array("launch"),
    "tool_phase" => "react",
    "privacy_level" => "name_only",  // anonymous, name_only, public
    "license" => "Apache",
    "languages" => array(
        "English"
    ),
    "source_url" => "https://github.com/csev/tsugi-react-base",
    // For now Tsugi tools delegate this to /lti/store
    "placements" => array(
        /*
        "course_navigation", "homework_submission",
        "course_home_submission", "editor_button",
        "link_selection", "migration_selection", "resource_selection",
        "tool_configuration", "user_navigation"
        */
    ),
    "screen_shots" => array(
        /*
        "store/screen-01.png",
        "store/screen-02.png",
        "store/screen-03.png"
         */
    )

);
