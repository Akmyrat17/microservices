'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ordering-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-4455ef1363abec37c9e1200ba451dd9f392574875bbedb340599e7bc79eace9b19d1ccb5f27c7ec0070b6fb0aacfcde7be62abe0211335422c322b9d03743c6c"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-4455ef1363abec37c9e1200ba451dd9f392574875bbedb340599e7bc79eace9b19d1ccb5f27c7ec0070b6fb0aacfcde7be62abe0211335422c322b9d03743c6c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-4455ef1363abec37c9e1200ba451dd9f392574875bbedb340599e7bc79eace9b19d1ccb5f27c7ec0070b6fb0aacfcde7be62abe0211335422c322b9d03743c6c"' :
                                            'id="xs-controllers-links-module-AuthModule-4455ef1363abec37c9e1200ba451dd9f392574875bbedb340599e7bc79eace9b19d1ccb5f27c7ec0070b6fb0aacfcde7be62abe0211335422c322b9d03743c6c"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-4455ef1363abec37c9e1200ba451dd9f392574875bbedb340599e7bc79eace9b19d1ccb5f27c7ec0070b6fb0aacfcde7be62abe0211335422c322b9d03743c6c"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-4455ef1363abec37c9e1200ba451dd9f392574875bbedb340599e7bc79eace9b19d1ccb5f27c7ec0070b6fb0aacfcde7be62abe0211335422c322b9d03743c6c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-4455ef1363abec37c9e1200ba451dd9f392574875bbedb340599e7bc79eace9b19d1ccb5f27c7ec0070b6fb0aacfcde7be62abe0211335422c322b9d03743c6c"' :
                                        'id="xs-injectables-links-module-AuthModule-4455ef1363abec37c9e1200ba451dd9f392574875bbedb340599e7bc79eace9b19d1ccb5f27c7ec0070b6fb0aacfcde7be62abe0211335422c322b9d03743c6c"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BillingModule.html" data-type="entity-link" >BillingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BillingModule-0a51f13a4167d31dca8583716f2eb6c83ad7a1add64b5c943c6980cb0875b29fd5840ce7d7e161a3ba30a95dd17e2acc28373584db3f85a79687ae495d005a1c"' : 'data-bs-target="#xs-controllers-links-module-BillingModule-0a51f13a4167d31dca8583716f2eb6c83ad7a1add64b5c943c6980cb0875b29fd5840ce7d7e161a3ba30a95dd17e2acc28373584db3f85a79687ae495d005a1c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BillingModule-0a51f13a4167d31dca8583716f2eb6c83ad7a1add64b5c943c6980cb0875b29fd5840ce7d7e161a3ba30a95dd17e2acc28373584db3f85a79687ae495d005a1c"' :
                                            'id="xs-controllers-links-module-BillingModule-0a51f13a4167d31dca8583716f2eb6c83ad7a1add64b5c943c6980cb0875b29fd5840ce7d7e161a3ba30a95dd17e2acc28373584db3f85a79687ae495d005a1c"' }>
                                            <li class="link">
                                                <a href="controllers/BillingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BillingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BillingModule-0a51f13a4167d31dca8583716f2eb6c83ad7a1add64b5c943c6980cb0875b29fd5840ce7d7e161a3ba30a95dd17e2acc28373584db3f85a79687ae495d005a1c"' : 'data-bs-target="#xs-injectables-links-module-BillingModule-0a51f13a4167d31dca8583716f2eb6c83ad7a1add64b5c943c6980cb0875b29fd5840ce7d7e161a3ba30a95dd17e2acc28373584db3f85a79687ae495d005a1c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BillingModule-0a51f13a4167d31dca8583716f2eb6c83ad7a1add64b5c943c6980cb0875b29fd5840ce7d7e161a3ba30a95dd17e2acc28373584db3f85a79687ae495d005a1c"' :
                                        'id="xs-injectables-links-module-BillingModule-0a51f13a4167d31dca8583716f2eb6c83ad7a1add64b5c943c6980cb0875b29fd5840ce7d7e161a3ba30a95dd17e2acc28373584db3f85a79687ae495d005a1c"' }>
                                        <li class="link">
                                            <a href="injectables/BillingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BillingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OrdersModule-bde0f521f93011110f486b13b6f9674b8ce8a6d2fd8c3b19df53c7d2ec1d42825c6dd6da4d2ab49b5f46eee4d5feb6abf760b074c7d186a69c15985c7d92fb0b"' : 'data-bs-target="#xs-controllers-links-module-OrdersModule-bde0f521f93011110f486b13b6f9674b8ce8a6d2fd8c3b19df53c7d2ec1d42825c6dd6da4d2ab49b5f46eee4d5feb6abf760b074c7d186a69c15985c7d92fb0b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrdersModule-bde0f521f93011110f486b13b6f9674b8ce8a6d2fd8c3b19df53c7d2ec1d42825c6dd6da4d2ab49b5f46eee4d5feb6abf760b074c7d186a69c15985c7d92fb0b"' :
                                            'id="xs-controllers-links-module-OrdersModule-bde0f521f93011110f486b13b6f9674b8ce8a6d2fd8c3b19df53c7d2ec1d42825c6dd6da4d2ab49b5f46eee4d5feb6abf760b074c7d186a69c15985c7d92fb0b"' }>
                                            <li class="link">
                                                <a href="controllers/OrdersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrdersModule-bde0f521f93011110f486b13b6f9674b8ce8a6d2fd8c3b19df53c7d2ec1d42825c6dd6da4d2ab49b5f46eee4d5feb6abf760b074c7d186a69c15985c7d92fb0b"' : 'data-bs-target="#xs-injectables-links-module-OrdersModule-bde0f521f93011110f486b13b6f9674b8ce8a6d2fd8c3b19df53c7d2ec1d42825c6dd6da4d2ab49b5f46eee4d5feb6abf760b074c7d186a69c15985c7d92fb0b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrdersModule-bde0f521f93011110f486b13b6f9674b8ce8a6d2fd8c3b19df53c7d2ec1d42825c6dd6da4d2ab49b5f46eee4d5feb6abf760b074c7d186a69c15985c7d92fb0b"' :
                                        'id="xs-injectables-links-module-OrdersModule-bde0f521f93011110f486b13b6f9674b8ce8a6d2fd8c3b19df53c7d2ec1d42825c6dd6da4d2ab49b5f46eee4d5feb6abf760b074c7d186a69c15985c7d92fb0b"' }>
                                        <li class="link">
                                            <a href="injectables/OrdersRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrdersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RmqModule.html" data-type="entity-link" >RmqModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RmqModule-47221f7cf294aae706fc9354ded936cc5aa7402a0b0c4c567a36bbfd4731b0e79c8318c738ec0f17669195b7f94c535c0db66665d42f4500ef67e4c373fc3b8f"' : 'data-bs-target="#xs-injectables-links-module-RmqModule-47221f7cf294aae706fc9354ded936cc5aa7402a0b0c4c567a36bbfd4731b0e79c8318c738ec0f17669195b7f94c535c0db66665d42f4500ef67e4c373fc3b8f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RmqModule-47221f7cf294aae706fc9354ded936cc5aa7402a0b0c4c567a36bbfd4731b0e79c8318c738ec0f17669195b7f94c535c0db66665d42f4500ef67e4c373fc3b8f"' :
                                        'id="xs-injectables-links-module-RmqModule-47221f7cf294aae706fc9354ded936cc5aa7402a0b0c4c567a36bbfd4731b0e79c8318c738ec0f17669195b7f94c535c0db66665d42f4500ef67e4c373fc3b8f"' }>
                                        <li class="link">
                                            <a href="injectables/RmqService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RmqService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-4ae09c2e2a54f6549febb1d6908cdf65639d4d3877a2233d2f59a042f978bd5a66e089cc6d92647ac45dd699773441302815dd43c2909db7597683c6166747d1"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-4ae09c2e2a54f6549febb1d6908cdf65639d4d3877a2233d2f59a042f978bd5a66e089cc6d92647ac45dd699773441302815dd43c2909db7597683c6166747d1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-4ae09c2e2a54f6549febb1d6908cdf65639d4d3877a2233d2f59a042f978bd5a66e089cc6d92647ac45dd699773441302815dd43c2909db7597683c6166747d1"' :
                                            'id="xs-controllers-links-module-UsersModule-4ae09c2e2a54f6549febb1d6908cdf65639d4d3877a2233d2f59a042f978bd5a66e089cc6d92647ac45dd699773441302815dd43c2909db7597683c6166747d1"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-4ae09c2e2a54f6549febb1d6908cdf65639d4d3877a2233d2f59a042f978bd5a66e089cc6d92647ac45dd699773441302815dd43c2909db7597683c6166747d1"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-4ae09c2e2a54f6549febb1d6908cdf65639d4d3877a2233d2f59a042f978bd5a66e089cc6d92647ac45dd699773441302815dd43c2909db7597683c6166747d1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-4ae09c2e2a54f6549febb1d6908cdf65639d4d3877a2233d2f59a042f978bd5a66e089cc6d92647ac45dd699773441302815dd43c2909db7597683c6166747d1"' :
                                        'id="xs-injectables-links-module-UsersModule-4ae09c2e2a54f6549febb1d6908cdf65639d4d3877a2233d2f59a042f978bd5a66e089cc6d92647ac45dd699773441302815dd43c2909db7597683c6166747d1"' }>
                                        <li class="link">
                                            <a href="injectables/UsersRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BillingController.html" data-type="entity-link" >BillingController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/OrdersController.html" data-type="entity-link" >OrdersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractDocument.html" data-type="entity-link" >AbstractDocument</a>
                            </li>
                            <li class="link">
                                <a href="classes/AbstractRepository.html" data-type="entity-link" >AbstractRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BillingService.html" data-type="entity-link" >BillingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrdersRepository.html" data-type="entity-link" >OrdersRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrdersService.html" data-type="entity-link" >OrdersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RmqService.html" data-type="entity-link" >RmqService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersRepository.html" data-type="entity-link" >UsersRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/RmqModuleOptions.html" data-type="entity-link" >RmqModuleOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenPayload.html" data-type="entity-link" >TokenPayload</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});